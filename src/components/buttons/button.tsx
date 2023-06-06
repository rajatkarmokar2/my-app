/** @format */

import React from 'react'

const Button = (props: any) => {
	return (
		<button
			{...props}
			className={`uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline ${props.className} `}>
			{props.children}
		</button>
	)
}

export default Button
