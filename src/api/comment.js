import axios from 'axios'

export function getCommentList(limit, page) {
	const url = '/api/commentList/'
	const data = {
		limit,
		page
	}
	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function addComment(comment) {
	const url = '/api/commentAdd/'
	const data = {
		'name': comment.name,
		'content': comment.content
	}
	return axios.post(url, {params: data}).then(() => {
		return Promise.resolve()
	})
}

export function replyComment(id, obj) {
	const url = '/api/commentReply/'
	const data = {
		id,
		'name': obj.name,
		'content': obj.content
	}
	console.log(data)
	return axios.post(url, {params: data}).then(() => {
		return Promise.resolve()
	})
}

export function deleteComment(id) {
	const url = '/api/commentDelete/'
	const data = id 
	return axios.post(url, {params: data}).then(() => {
		return Promise.resolve()
	})
}

export function commentCount() {
	const url = '/api/commentCount/'
	return axios.get(url).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function commentLatest(limit) {
	const url = '/api/commentLatest/'
	const data = {
		limit
	}
	return axios.get(url, {params: data}).then((res) => {
		return Promise.resolve(res.data)
	})
}