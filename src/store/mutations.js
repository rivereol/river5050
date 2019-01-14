const mutations = {
	SET_LATESTARTICLE (state, latestArticle){
		state.latestArticle = latestArticle
	},
	SET_LATESTCOMMENT (state, latestComment){
		state.latestComment = latestComment
	},
	SET_TAG (state, tag) {
		state.tag = tag
	}
}

export default mutations