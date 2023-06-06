/** @format */

import React from 'react'

const InputRadio = (props:any) => {
	return (
		<label className='block text-gray-500 font-bold'>
			<input {...props.input} type='radio' className='mr-2 leading-tight' />
			<span className='text-sm'>{props.label}</span>
		</label>
	)
}

export default InputRadio
