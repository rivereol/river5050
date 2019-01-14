<template>
	<div>
		<div v-for="(item,index) in latestArticle">
			<MenuItem :name="'2-'+index">
				<router-link :to="{name:'article', params:{'id': item._id}}">
					{{item.title}}
				</router-link>
			</MenuItem>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			latestArticle: 'latestArticle'
		})
	}
}
</script>
<style lang="less" scoped>
a {
 	color: #3354AA;
}
</style>