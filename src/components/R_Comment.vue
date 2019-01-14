<template>
	<div>
		<div class="title">
			留言
		</div>
		<div>
			<p class="index">在此留言。你可以进行bug反馈，提出意见或者有什么你希望增加的功能模块。</p>
		</div>
		<!-- 留言展示 -->
		<div class="commentWrapper">
			<div v-for="(item,index) in comment" >
				<comment ref="comment" :comment="item" 
				 @refresh="refresh" />
			</div>
		</div>
		<Page class="page" :total="this.count" show-sizer :page-size="20" 
		@on-change="changePage"></Page>
		<!-- 留言添加 -->
		<div>
			<p class="title newReply">说点什么吧</p>
			<reply @refresh="refresh" replyType="addComInCom"/>
		</div>
	</div>	
</template>

<script>
import {getCommentList, commentCount} from '../api/comment'
import Comment from '../base/comment'
import Reply from '../base/reply'

export default {
	data() {
		return {
			limit: 20,
			page: 1,
			comment: [],
			showReply: false,
			count: 20
		}
	},
	created() {
		this.getList(this.limit, this.page)
		commentCount().then(res => {
			this.count = res
		})
	},
	methods: {
		getList(limit, page) {
			getCommentList(limit, page).then(res => {
				this.comment = res
			})
		},
		changePage(newPage) {
			this.getList(this.limit, newPage)
		},
		refresh() {
			this.getList(this.limit, this.page)
		}
	},
	components: {
		Comment,
		Reply
	}
}
</script>
<style scoped>
.title {
	font-weight: bolder;
	font-size: 20px;
	color: #3354AA;
}
.index {
	font-size: 13px;
	color: #657180;
	margin-top: 20px;
}
.commentWrapper {
	margin-top: 100px;
}
.page {
	margin-top: 20px;
}
.newReply {
	margin-top: 100px;
	margin-bottom: 20px;
}
</style>