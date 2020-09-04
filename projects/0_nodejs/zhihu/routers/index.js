const Router= require('koa-router');

let router= new Router();

//localhost:8080/
router.get('', async ctx=>{
    let page=1;
    let page_size =8;

  let questions = await ctx.db.execute(
  //   select * from question_table LIMIT ${(page-1)*page_size}, ${page_size}
      `select qbest.id,qbest.title,qbest.best_answer_content,au.name,au.headline from (
        select q.*, a.content as best_answer_content, a.author_id from (select * from question_table limit ${(page-1)*page_size}, ${page_size}) 
        as q left join answer_table as a on q.best_answer_id = a.id
        ) as qbest left join author_table as au on qbest.author_id = au.id;

      `);

      console.log(questions[0]);

    
   await ctx.render('list',{questions:questions})
});

//localhost:8080/detail/12323
router.get('detail/:id', async ctx=>{
    await ctx.render('item')
});

module.exports = router.routes();
