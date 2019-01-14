<template>
	<div class="comment">
		<span class="comment-title">
			<img src="https://s2.ax1x.com/2019/01/07/FqEyvt.png" alt="FqEyvt.png" border="0" class="img"/>
			<div class="name">{{comment.name}} </div>
			<div class="time">{{comment.createdAt}}</div>
		</span>
		<p class="comment-body">{{comment.content}}</p>
		<!-- 回复按钮 -->
		<div class="replyTips" >
			<Button type="text" class="replyBtn" @click.stop="toggle">{{replyTips}}
			</Button>
		</div>
		<!-- 回复评论用表格 -->
		<reply class="reply" v-if="showReply" :targetId="comment._id" 
		:replyType="isInArticle?'replyArticle':'replyComment'" 
		@refresh="refresh" />
		<!-- 递归组件调用 -->
		<div v-for="(item,index) in comment.comment" 
		:class="{'commentOdd':odd,'commentEven':!odd}">
			<comment-child :comment="item" :odd="!odd" 
			@refresh="refresh" :isInArticle="isInArticle" />
		</div>
	</div>	
</template>

<script>
import Reply from './reply'

export default {
	name:'commentChild',
	data() {
		return {
			showReply: false,
			replyTips: '回复'
		}
	},
	props: {
		comment: {
			type: Object,
			default: {}
		},
		isInArticle: {
			type: Boolean,
			default: false
		},
		odd: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		refresh() {
			this.$emit("refresh")
			this.reset()
		},
		toggle() {
			if (this.showReply) {
				this.replyTips = '回复',
				this.showReply = false
			} else {
				this.replyTips = '取消回复',
				this.showReply = true
			}
		},
		reset() {
			this.replyTips = '回复',
			this.showReply = false
		}
	},
	components: {
		Reply
	}
}
</script>
<style scoped>
.comment {
	margin-top: 20px;
	border: 1px solid #EEE;
	padding: 15px 0px 0px 15px;
	min-width: 380px;
}
.comment-title {
	height: 40px;
	width: 100%;
}
.img {
	width: 32px;
	height: 32px;
	float: left;
	margin-right: 10px;
}
.name {
	font-weight: bolder;
	color: #3354AA;
}
.comment-body {
	font-size: 13px;
	color: #657180; 
	width: 100%;
	margin-top: 15px;
	margin-bottom: 15px;
}
.replyTips {
	color: #3354AA;
	width: 100%;
	text-align: right;
}
.reply {
	margin-top: 60px;
}
.commentOdd {
	background-color: #E7ECF5;
}
.commentEven {
	background-color: #fff;
}
</style>