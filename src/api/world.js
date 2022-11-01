import apiUrl from '../apiConfig'
import axios from 'axios'

export const worldCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/world',
		data: {
			world: data, 
		},
        headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const worldIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/world'
	})
}

export const woeldShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/world/' + id
	})
}

export const worldUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/world/' + id,
		data: {
			world: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const worldDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/world/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}