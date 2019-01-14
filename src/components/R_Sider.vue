<template>
  <Menu theme="light" width="auto" :open-names="['1']">
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-navigate"></Icon>
              最新文章
          </template>
          <latestArticle></latestArticle> 
      </Submenu>
      <Submenu name="2">
          <template slot="title">
              <Icon type="ios-keypad"></Icon>
              最近留言
          </template>
          <latestcomment></latestcomment>
      </Submenu>
      <Submenu name="3">
          <template slot="title">
              <Icon type="ios-analytics"></Icon>
              标签分类
          </template>
          <MenuItem name="3-1">
            <tag></tag>
          </MenuItem>
      </Submenu>
  </Menu>
</template>

<script>
import Tag from './tag'
import LatestArticle from './latestArticle'
import Latestcomment from './latestComment'
import {articleGetTag, articleLatest} from '../api/article'
import {commentLatest} from '../api/comment'
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      articleLimit: 5,
      commentLimit: 10
    }
  },
  created() {
    articleGetTag().then(res => {
      this.SET_TAG(res)
    })
    articleLatest(this.articleLimit).then(res => {
      this.SET_LATESTARTICLE(res)
    })
    commentLatest(this.commentLimit).then(res => {
      this.SET_LATESTCOMMENT(res)
    })
  },
  methods: {
    ...mapMutations([
      'SET_TAG',
      'SET_LATESTCOMMENT',
      'SET_LATESTARTICLE'
    ])
  },
	components: {
    Tag,
    LatestArticle,
    Latestcomment
  }
}
</script>
