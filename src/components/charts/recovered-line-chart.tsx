/** @format */

import React from 'react'
import { getAllCovidCasesByHistoricalDate } from '../../apis/covid-19-api'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useQuery } from '@tanstack/react-query'

const RecoveredLineChart = () => {
	const covidCasesByHistoricalDate = useQuery({
		queryKey: ['covidCasesByHistoricalDate'],
		queryFn: getAllCovidCasesByHistoricalDate,
		placeholderData: { cases: {}, deaths: {}, recovered: {} },
	})

	const covidCasesSeries = [
		{
			name: 'Sales',
			data: Object.values(covidCasesByHistoricalDate.data.recovered).map((value: any) => value),
		},
	]

	const covidCasesOptions: ApexOptions = {
		chart: {
			height: 350,
			toolbar: { show: false },
			type: 'line',
		},
		title: {
			text: 'Recovery Rate',
			align: 'left',
			style: {
				fontSize: '16px',
				color: '#666',
			},
		},
		forecastDataPoints: {
			count: 7,
		},
		stroke: {
			width: 5,
			curve: 'smooth',
		},
		xaxis: {
			type: 'datetime',
			categories: Object.keys(covidCasesByHistoricalDate.data.recovered).map((key: string) => key),
			tickAmount: 10,
			labels: {
				formatter: function (value: any, timestamp: any, opts: any) {
					return opts.dateFormatter(new Date(timestamp), 'dd MMM')
				},
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				gradientToColors: ['#FDD835'],
				shadeIntensity: 1,
				type: 'horizontal',
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100, 100, 100],
			},
		},
	}

	return <ReactApexChart options={covidCasesOptions} height={350} series={covidCasesSeries} />
}

export default RecoveredLineChart
