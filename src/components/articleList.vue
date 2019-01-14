<template>
	<!-- <Scroll :on-reach-bottom="handOnReachBottom" height="this.listHeight" 
	distance-to-edge="[20, 20]" class="scroll" >-->
	<div>
		<div v-for="i in data" class="articleList">
			<div class="title highlight_miku" @click="selectItem(i._id)">{{i.title}}</div>
			<ul class="help">
				<li>时间:{{i.createdAt}}</li>
				<li>标签:{{i.tag}}</li>
				<li>{{i.comment.length}}条评论</li>
			</ul>
			<div class="content">
				{{i.content}}
			</div>
		</div>
		<Page :total="count" show-sizer @on-change="changePage"></Page>
	</div>
	<!-- </Scroll> -->

</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	props: {
		data: {
			type: Array,
			default: []
		},
		count: {
			type: Number,
			default: 100
		}
	},
	methods: {
		selectItem(id) {
			this.$router.push({
				path: `/article/${id}`
			})
		},
		changePage(page) {
			this.$emit("changePage", page)
		}
		// handOnReachBottom() {
		// 	this.listHeight += 1500
		// 	this.$emit("reachBottom")
		// }
	}
}
</script>

<style scoped lang="less">

li {
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

.scroll {
	overflow-y: hidden;
}

.highlight_miku {
	color: #39c5bb
}
</style>