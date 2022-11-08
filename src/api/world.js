import apiUrl from '../apiConfig'
import axios from 'axios'

export const worldCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/countries',
		data: {
			country: data, 
		},
        headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const worldIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/countries'
	})
}

export const worldShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/countries/' + id
	})
}

export const worldUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/countries/' + id,
		data: {
			country: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const worldDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/countries/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}