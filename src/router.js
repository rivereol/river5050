import Vue from 'vue'
import Router from 'vue-router'
import Article from './components/article'
import RArticleList from './components/R_ArticleList'
import RComment from './components/R_Comment'
import RTag from './components/R_Tag'
import RRecode from './components/R_Recode'
import AddArticle from './components/addArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/',
      component: RArticleList,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'article',
    	path: '/article/:id',
    	component: Article,
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'comment',
      path: '/comment',
      component: RComment,
    },
    {
      name: 'tag',
      path: '/tag',
      component: RTag,
    },
    {
      name: 'addArticle',
      path: '/addArticle',
      component: AddArticle
    }
  ]
})
