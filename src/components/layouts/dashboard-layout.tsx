/** @format */

import { useState } from 'react'
import Sidebar from '../sidebars/sidebar'
import Header from '../header/header'
import { Outlet } from 'react-router-dom'

const DashboardLayout = (props: any) => {
	const [showSidebar, onSetShowSidebar] = useState(false)
	return (
		<div className='flex items-start h-[100vh] overflow-auto'>
			<div className=' h-[100vh] fixed z-[1000] md:sticky top-0 '>
				<Sidebar onSidebarHide={() => onSetShowSidebar(false)} showSidebar={showSidebar} />
			</div>
			<div className='bg-white h-[100%] w-full overflow-x-hidden'>
				<Header />
				<Outlet />
			</div>
		</div>
	)
}

export default DashboardLayout
