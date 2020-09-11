<template>
    <div>
        <Header/>
    <div class="pagewrap pagewrap-full">
      <div class="article-detail">
        <div class="post-wrapper">
          <div class="post-detail-con-box full-reading mainlib_flex_wapper">
          <ArticleMain :data="article_data"/>
          <ArticleRight :data="article_data"/>
          </div>
        </div>
      </div>
  <DetailShare/>
 <ArticleDetail/>
    </div>
        <Footer/>
    </div>
</template>
<script>
import Header from './inc/header'
import Footer from './inc/footer'
import DetailShare from './detail_share'
import ArticleDetail from './article_detail'
import ArticleMain from './article_main'
// import ArticleRight from './article_right'

export default {
    name:'detail',
    components:{
      ArticleRight: import './article_right.vue',
      Header,Footer,DetailShare,ArticleDetail,ArticleMain,
    },
    mounted() {
      let id =this.$route.params.id;
  
      this.$store.dispatch('loadArticle',id);
    },
    computed: {
        article_data(){
            
            return this.$store.state.article_data; 
        }
    },
}
</script>
<style lang="css">
    
</style>