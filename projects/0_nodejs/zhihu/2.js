const fs= require('fs');
const Mysql = require('mysql-pro');

const db= new Mysql({
    mysql:{
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'zhihu'
    }
});

const arr= JSON.parse(fs.readFileSync('.topics').toString());

let topics={},topic_ID=1;
let authors={},author_ID=1;
let questions={},question_ID=1;
let answers={},answer_ID=1;

arr.forEach(question=>{
    //topics

      question.topices.map(json=>{
        let {title}= json;
        title = title.replace('\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t','');
        title =title.replace('\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t',"");
       if(!topics[title]){
           topics[title]= topic_ID++;
       }
   
    });

    // authors
        if(!authors[question.bestAnswer.author.id]){
            authors[question.bestAnswer.author.id]= {author_ID:author_ID++, author:question.bestAnswer.author};
        }

        question.answers.map(answer=>{
            if(!authors[answer.author.id]){
                authors[answer.author.id]= {author_ID:author_ID++, author:answer.author};
            }
        });

    //questions:

        if(!questions[question.question_ID]){
    
            questions[question.question_ID]={question_ID:question_ID++, question:question}
        }
    //answers:

    if(!answers[question.bestAnswer.answer_ID]){
        answers[question.bestAnswer.answer_ID]= {answerID:answer_ID++, answer:question.bestAnswer,questionID:question.question_ID};
    }

    question.answers.map(answer=>{
        if(!answers[answer.answer_ID]){
            answers[answer.answer_ID]= {answerID:answer_ID++, answer:answer,questionID:question.question_ID};
        }
    });


});

//console.log(topics)
//console.log(authors);
// console.log(questions);

//insert into topic (id,name) values(11,'dd'),(12,'een')

function get_topic_sql(){
  const str=  Object.keys(topics).map(t=>`(${topics[t]},'${t}')`).join(',');

  //console.log(str);

  return `insert into topic(id,name)values ${str}`;

}
// let a= 'Creative\'co\'der@INT++ n\'Float Lab';
function _safeItem(str){
    // 
    str= str.replace("'",'');
    if(str.includes('\'')){
        return _safeItem(str);
    }else {
        return str;
    }
}
function _safeObject(ojb){
    const newobj={};
    Object.keys(ojb).forEach(o=>{
        newobj[o]=_safeItem(ojb[o].toString());
    })

    return newobj;

}   

function _getBestAnswerID(answer_ID){

    let id='';

    Object.keys(answers).forEach(a=>{
        if(a == answer_ID){
            id=answers[a].answerID;
        }
    });
 
  return  id;

}

function _getTopiclist(tps){
    let res=[];

    tps.forEach(t=> {
        if(topics[t.title]){
            res.push(topics[t.title]);
        }
    });

    return res.join(',');
}

function _getAuthorID(author){
    let id='';
    Object.keys(authors).forEach(a=>{
        if(a == author.id){
            id= authors[a].author_ID;
        }
    });

    return id;
}

function _getQuestionID(question_ID){
    let id='';
   // console.log(question_ID);
    Object.keys(questions).forEach(q=>{
        if(q == question_ID){
            id= questions[q].question_ID;
        }
    })

    return id;
}

function get_answer_sql(){
    // id,question_id,content,create_time,author_id
    const str = Object.keys(answers).map(q =>{
        const {answerID,answer,questionID} = answers[q];

        if(answerID){
        
             const str =`(${answerID},${_getQuestionID(questionID)},
             '${_safeItem(answer.content)}',${answer.createdTime},
             ${_getAuthorID(answer.author)})`;

          return str;
        }
        
        
    }).join(',');

   
  const sql = `insert into answer_table(id,question_id,content,create_time,author_id)values ${str}`;

 //  console.log(sql);
   return sql;

}

function get_question_sql(){
    //id,title,content,topics,attention_count,view_count,best_answer_id;

        const str = Object.keys(questions).map(q =>{
            const {question_ID,question} = questions[q];
            if(question){
             
              const question1 = question;

                 const str =`(${question_ID},'${_safeItem(question1.title)}',
                 '${_safeItem(question1.question_content)}','${ _getTopiclist(question1.topices)}',
                 ${question1.attention_count},${question1.view_count},
                 ${ _getBestAnswerID(question1.bestAnswer.answer_ID) })`;

              return str;
            }
            
            
        }).join(',');
    
       
      const sql = `insert into question_table(id,title,content,topics,attention_count,view_count,best_answer_id)values ${str}`;
    
       //console.log(sql);
     return sql;
    
    
    }


function get_author_sql(){
//id,type,name,gender,user_type,image_url,headline,followerCount

    const str = Object.keys(authors).filter(au=>authors[au].author).map(a=>{
        const {author_ID,author} = authors[a];
        if(author){
           const author1 = _safeObject(author);
             const str =`(${author_ID},'${author1.type}','${author1.name}',${author1.gender},'${author1.userType}','${author1.avatarUrl}','${author1.headline}',${author1.followerCount})`;
          return str;
        }
        
        
    }).join(',');

   
  const sql = `insert into author_table(id,type,name,gender,user_type,image_url,headline,followerCount)values ${str}`;

 return sql;


}

function insert(sql){

    try {

    db.startTransaction();
    db.executeTransaction(sql);
    db.stopTransaction();

    } catch (error) {
        console.log(error);
    }
}

// insert(get_topic_sql());
// insert(get_author_sql());

//insert(get_question_sql());

insert(get_answer_sql());



