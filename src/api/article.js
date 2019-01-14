import axios from 'axios'

export function getArticleList(limit, page) {
	const url = '/api/articleList/'
	const data = {
		limit,
		page
	}
	return axios.get(url, {params: data}).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function findArticleById(id) {
	const url = '/api/articleFindById/' + id
	return axios.get(url).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function searchArticle(key) {
	const url = '/api/articleSearch/' + key
	return axios.get(url).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function addArticle(obj) {
	const url = '/api/articleAdd/'
	let title = obj.title
	let content = obj.content
	let tag = obj.tag
	const data = {
		title,
		content,
		tag
	}
	return axios.post(url, {params: data}).then(() => {
		return Promise.resolve()
	})
}

export function deleteArticle(id) {
	const url = '/api/articleDelete/' + id
	return axios.get(url).then(() => {
		return Promise.resolve()
	})
}

export function articleCount() {
	const url = '/api/articleCount/'
	return axios.get(url).then((res) => {
		return Promise.resolve(res.data)
	})
}


export function updateArticleComment(id, obj) {
	const url = '/api/articleUpdateComment/'
	let name = obj.name
	let content = obj.content
	const data = {
		id,
		name,
		content
	}
	return axios.post(url, {params: data}).then(() => {
		return Promise.resolve()
	})
}

export function updateArticle(id, title, content) {
	const url = '/api/articleUpdateArticle/'
	const data = {
		id,
		title,
		content
	}
	return axios.post(url, {params: data}).then(() => {
		return Promise.resolve()
	})
}

export function articleGetTag() {
	const url = '/api/articleGetTag/'
	return axios.get(url).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function articleLatest(limit) {
	const url = '/api/articleLatest/'
	const data = {
		limit
	}
	return axios.get(url, {params: data}).then((res) => {
		return Promise.resolve(res.data)
	})
}