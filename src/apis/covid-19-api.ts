/** @format */

import axios from 'axios'

const baseUrl = 'https://disease.sh/v3/covid-19'
const apiConfig = axios.create({
	baseURL: baseUrl,
})

export const getAllCovidCases = () =>
	apiConfig.get(baseUrl + '/all').then((res) => {
		console.log('getAllCovidCases', res.data)
		return res.data
	})

export const getAllCovidCasesByCountries = () =>
	apiConfig.get(baseUrl + '/countries').then((res) => {
		console.log('getAllCovidCasesByCountries', res.data)
		return res.data
	})
export const getAllCovidCasesByHistoricalDate = () =>
	apiConfig.get(baseUrl + '/historical/all?lastdays=all').then((res) => {
		console.log('getAllCovidCasesByHistoricalDate', res.data)
		return res.data
	})
