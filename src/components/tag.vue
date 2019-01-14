<template>
	<div>
		<div v-for="(item,index) in tagList">
			<Tag :color=colorList[index]>{{item}}</Tag>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	data() {
		return {
			colorList: [
				'default',
				'#39c5bb',
				'primary',
				'success',
				'error',
				'warning',
				'magenta',
				'red',
				'volcano',
				'orange',
				'gold',
				'yellow',
				'lime',
				'green',
				'cyan',
				'blue',
				'geekblue',
				'purple',
				'FFA2D3'
			]
		}
	},
	computed: {
		...mapGetters({
			tagList: 'tag'
		})
	}
}
</script>