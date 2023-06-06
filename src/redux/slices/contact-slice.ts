/** @format */

import { createSlice } from '@reduxjs/toolkit'
// import { v4 as uuidv4 } from 'uuid';

export const uuidv4 = () => Math.round(Math.random() * 1000).toString()

export interface ContactData {
	id: string
	firstname: string
	lastname: string
	status: string
}

export interface ContactState {
	data: ContactData[]
}

const initialState: ContactState = {
	data: [
		{
			id: uuidv4(),
			firstname: 'Rajat',
			lastname: 'Karmokar',
			status: 'Active',
		},
		{
			id: uuidv4(),
			firstname: 'Brahma',
			lastname: 'Karmokar',
			status: 'Active',
		},
		{
			id: uuidv4(),
			firstname: 'Rajesh',
			lastname: 'Karmokar',
			status: 'Active',
		},
		{
			id: uuidv4(),
			firstname: 'Nisha',
			lastname: 'Karmokar',
			status: 'Active',
		},
		{
			id: uuidv4(),
			firstname: 'Akhilesh',
			lastname: 'Karmokar',
			status: 'Active',
		},
		{
			id: uuidv4(),
			firstname: 'Loydon',
			lastname: 'Karmokar',
			status: 'Active',
		},
		{
			id: uuidv4(),
			firstname: 'Chirag',
			lastname: 'Karmokar',
			status: 'Active',
		},
		{
			id: uuidv4(),
			firstname: 'Rajat',
			lastname: 'Karmokar',
			status: 'Active',
		},
		{
			id: uuidv4(),
			firstname: 'Rajat',
			lastname: 'Karmokar',
			status: 'Active',
		},
	],
}

export const contactSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: (state, action) => {
			state.data.push(action.payload)
		},
		editContact: (state, action) => {
			let objIndex = state.data.findIndex((obj) => obj.id === action.payload.id)			
			state.data[objIndex] = action.payload
		},
		deleteContact: (state, action) => {
			let objIndex = state.data.findIndex((obj) => obj.id === action.payload)
			state.data.splice(objIndex, 1)
		},
	},
})

export const { addContact, editContact, deleteContact } = contactSlice.actions
export const contactReducer = contactSlice.reducer
