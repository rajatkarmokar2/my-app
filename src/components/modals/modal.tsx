/** @format */

import React, { useState } from 'react'

import { BsX } from 'react-icons/bs'

const Modal = ({ open, handleClose, children }: any) => {
	return (
		<div
			className={`fixed flex inset-0 bg-[#12345678] transtion duration-500 p-3 ${
				(open && 'z-[1000] opacity-1') || 'z-[-1000] opacity-0'
			} `}>
			<div className='absolute inset-0' onClick={handleClose}></div>
			<div
				className={`relative m-auto flex transtion duration-200 border rounded-lg shadow overflow-hidden max-w-[100%]  ${
					(open && 'scale-y-100') || 'scale-y-0'
				} `}>
				<span onClick={handleClose} className='absolute cursor-pointer right-0 top-0 m-3'>
					<BsX className='text-3xl' />
				</span>
				{children}
			</div>
		</div>
	)
}

export default Modal
