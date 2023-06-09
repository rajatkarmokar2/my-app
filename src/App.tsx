/** @format */

import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/contact'
import DashboardLayout from './components/layouts/dashboard-layout'
import ChartsAndMaps from './pages/charts-and-maps'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/my-app' element={<DashboardLayout />}>
					<Route index element={<Contact />} />
					<Route path='contacts' element={<Contact />} />
					<Route path='charts-and-maps' element={<ChartsAndMaps />} />
				</Route>
				<Route path='*' element={<h1>Not Found</h1>} />
			</Routes>
		</div>
	)
}

export default App
