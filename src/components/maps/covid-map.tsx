/** @format */

import { useQuery } from '@tanstack/react-query'
import React, { useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { getAllCovidCasesByCountries } from '../../apis/covid-19-api'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const defaultPosition = {
	lat: 35.7407872,
	lng: 51.4375991,
	zoom: 13,
}

let DefaultIcon = L.icon({
	iconUrl: require('../../assets/images/icons8-location-64.png'),
	iconSize: [30, 30],
})

const CovidMap = () => {
	const [loc, setLoc] = useState<[number, number]>([defaultPosition.lat, defaultPosition.lng])
	const markerRef = useRef(null)
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker: any = markerRef.current
				if (marker != null) {
					setLoc(marker.getLatLng())
				}
			},
		}),
		[]
	)
	// country: "Afghanistan"
	// countryInfo: Object { _id: 4, iso2: "AF", iso3: "AFG", … }
	// _id: 4
	// flag: "https://disease.sh/assets/img/flags/af.png"
	// iso2: "AF"
	// iso3: "AFG"
	// lat: 33
	// long: 65
	const covidCasesByCountries = useQuery({
		queryKey: ['covidCasesByCountries'],
		queryFn: getAllCovidCasesByCountries,
		placeholderData: { data: [] },
	})
	console.log('covidCasesByCountries', covidCasesByCountries)

	return (
		<div className='h-[500px] w-[100%] '>
			<MapContainer className='map' center={loc} zoom={defaultPosition.zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{covidCasesByCountries.data[0] &&
					covidCasesByCountries.data.splice(0, 100).map((v: any) => (
						<Marker
							position={[v.countryInfo.lat, v.countryInfo.long]}
							// draggable={true}
							// eventHandlers={eventHandlers}
							// ref={markerRef}
							icon={DefaultIcon}>
							<Popup>
								{v.continent} / {v.country}
								<br />
								Cases: {v.cases}
								<br />
								Deaths: {v.deaths}
								<br />
								Recovered: {v.recovered}
							</Popup>
						</Marker>
					))}
				{/* <Marker
					position={loc}
					// draggable={true}
					eventHandlers={eventHandlers}
					ref={markerRef}
					icon={DefaultIcon}
                    >
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}
			</MapContainer>
		</div>
	)
}

export default CovidMap
