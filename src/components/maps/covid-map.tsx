/** @format */

import React, { useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const defaultPosition = {
	lat: 35.7407872,
	lng: 51.4375991,
	zoom: 13,
}

const CovidMap = () => {
	const [loc, setLoc] = useState<[number,number]>([defaultPosition.lat, defaultPosition.lng])
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
	return (
		<div className='h-[500px] w-[600px] overflow-auto'>
			<MapContainer className='map' center={loc} zoom={defaultPosition.zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker
					position={loc}
					// draggable={true}
					eventHandlers={eventHandlers}
					ref={markerRef}
					// icon={DefaultIcon}
                    >
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default CovidMap
