/** @format */

import React from 'react'

const Input = (props: any) => {
	return (
		<>
			<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
				{props.label}
			</label>
			<input
				{...props.input}
				className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
					props.error && 'bg-red-600'
				}`}
			/>
			<p className='text-red-500 text-xs italic'>{props.error}</p>
		</>
	)
}

export default Input
