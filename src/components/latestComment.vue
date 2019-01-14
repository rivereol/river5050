<template>
	<div>
		<div v-for="(item,index) in latestComment">
			<MenuItem :name="'2-'+index">
				{{item.name}}: {{item.content}}
			</MenuItem>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			latestComment: 'latestComment'
		})
	}
}
</script>