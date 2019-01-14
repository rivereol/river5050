<template>
	<div>
		<div class="title highlight_miku" >{{this.article.title}}</div>
		<ul class="help">
			<li>时间:{{this.article.createdAt}}</li>
			<li>标签:{{this.article.tag}}</li>
		</ul>
		<div class="content">
			{{this.article.content}}
		</div>
		<!-- 评论区 -->
		<div class="commentWrapper">
			<div v-for="(item,index) in article.comment" >
				<comment ref="comment" :comment="item" @refresh="getArticle" :isInArticle="true"/>
			</div>
		</div>
		<!-- 留言区 -->
		<div>
			<p class="title newReply">说点什么吧</p>
			<reply @refresh="getArticle" replyType="addComInArt" 
			:targetId="article._id" />
		</div>
	</div>

</template>

<script>
import {findArticleById} from '../api/article'
import Comment from '../base/comment'
import Reply from '../base/reply'

export default {
	data() {
		return {
			id: '',
			article: []
		}
	},
	created() {
		this.getArticle()
	},
	methods: {
		getArticle() {
			this.id = this.$route.params.id
			findArticleById(this.id).then(res => {
				this.article = res
			})
		}
	},
	watch: {
		"$route": "getArticle"
	},
	components: {
		Comment,
		Reply
	}
}
</script>

<style scoped lang="less">
li {
	list-style: none;
	float: left;
}
li:nth-child(2), li:nth-child(3){
	margin-left: 20px;
}
.articleList {
	width: 100%;
	height: 150px;
	float: left;
}

.title {
	font-size: 20px;
	font-weight: bold;
}

.help {
	margin-top: 10px;
	color: #9ea7b4;
	font-size: 13px;
}

.content {
	margin-top: 40px;
	height: 90px;
	font-size: 14px;
	color: #464c5b;
}

.highlight_miku {
	color: #39c5bb
}
.title {
	font-weight: bolder;
	font-size: 20px;
	color: #3354AA;
}
.newReply {
	margin-top: 100px;
	margin-bottom: 20px;
}
</style>