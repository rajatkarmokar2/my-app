/** @format */

import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { FaCaretSquareLeft, FaArrowCircleLeft, FaPhone, FaBars, FaChartLine } from 'react-icons/fa'

const Sidebar = (props: any) => {
	const [menuCollapse, setMenuCollapse] = useState(true)

	const menuIconClick = () => {
		menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
	}
	return (
		<>
			<div
				onClick={() => setMenuCollapse((ps) => !ps)}
				className={` md:hidden fixed top-0 start-0 z-[1000] text-white text-xl m-5 mx-6 cursor-pointer`}>
				<FaBars />
			</div>
			<div className='w-[0px] md:w-[auto] '>
				<ProSidebar
					collapsed={menuCollapse}
					className={`h-[100vh] bg-blue-400 w-[250px] ${
						menuCollapse && 'translate-x-[-100%]'
					} md:translate-x-[0%] sticky z-[1000] top-0 border-0 truncate`}>
					<div className='p-4 h-[65px] flex justify-between items-center bg-blue-600 text-white'>
						<div className='logotext'>
							<p>{menuCollapse ? 'L' : 'Big Logo'}</p>
						</div>
						<div onClick={menuIconClick}>
							<FaArrowCircleLeft
								className={`cursor-pointer relative transition w-[20px] h-[20px] ${
									(menuCollapse && 'rotate-180') || ''
								}`}
							/>
						</div>
					</div>
					<Menu className='mt-3 p-1'>
						<MenuItem
							className=' group group-[&.active]:bg-black '
							component={<Link to='contacts' />}>
							<div className='flex text-xl items-center gap-3'>
								<div>
									<FaPhone className='font-1 w-[20px] h-[20px]' />
								</div>
								Contacts
							</div>
						</MenuItem>
						<MenuItem component={<Link to='charts-and-maps' />}>
							<div className='flex text-xl items-center gap-3'>
								<div>
									<FaChartLine className='font-1 w-[20px] h-[20px]' />
								</div>
								Charts and Maps
							</div>
						</MenuItem>
					</Menu>
				</ProSidebar>
			</div>
		</>
	)
}

export default Sidebar
