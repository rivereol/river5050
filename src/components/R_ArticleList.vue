<template>
	<article-list :data="article" :count="count" @changePage="updata"></article-list>
</template>

<script>
import {getArticleList, articleCount} from '../api/article'
import ArticleList from '@/components/articleList'

export default {
	data() {
		return {
			limit: 10,
			page: 1,
			article: [],
			count: 10
		}
	},
	created() {
		this.getList(this.limit, this.page)
		this.getCount()
	},
	methods: {
		getList(limit, page) {
			getArticleList(limit, page).then((res) => {
				this.article = res
			})
		},
		updata(newPage) {
			this.getList(this.limit, newPage)
		},
		getCount() {
			articleCount().then(res => {
				this.count = res
			})
		}
	},
	components: {
		ArticleList
	}
}
</script>