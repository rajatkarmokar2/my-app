/** @format */

import React, { ReactComponentElement, useState } from 'react'
import DashboardLayout from '../components/layouts/dashboard-layout'
import HistoricCasesLineChart from '../components/charts/cases-line-chart'
import DeathsLineChart from '../components/charts/deaths-line-chart'
import RecoveredLineChart from '../components/charts/recovered-line-chart'
import CovidMap from '../components/maps/covid-map'

const ChartsAndMaps = () => {
	return (
		<>
			<div className='p-4 '>
				<div className='flex flex-wrap lg:flex-nowrap gap-3'>
					<div className='w-full bg-gray-100 rounded-lg'>
						<HistoricCasesLineChart />
					</div>
					<div className='w-full bg-gray-100 rounded-lg'>
						<DeathsLineChart />
					</div>
					<div className='w-full bg-gray-100 rounded-lg'>
						<RecoveredLineChart />
					</div>
				</div>
				<div>{/* <CovidMap /> */}</div>
			</div>
		</>
	)
}

export default ChartsAndMaps