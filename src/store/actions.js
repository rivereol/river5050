//import SET_LATESTCOMMENT from './mutations'

export const updateLatestComment = function({commit, state}, obj) {
	//console.log("obj:", obj)
	let oldCommentList = state.latestComment.slice();
	console.log("oldCommentList:", oldCommentList)
	oldCommentList.splice(-1, 1);
	oldCommentList.splice(0, 0, obj);
	console.log("oldCommentList:", oldCommentList)
	commit('SET_LATESTCOMMENT', oldCommentList);
}