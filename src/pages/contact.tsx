/** @format */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DashboardLayout from '../components/layouts/dashboard-layout'
import Input from '../components/inputs/input'
import InputRadio from '../components/inputs/input-radio'
import Button from '../components/buttons/button'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { addContact, deleteContact, editContact, uuidv4 } from '../redux/slices/contact-slice'
import Modal from '../components/modals/modal'
// import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
	const contacts = useSelector((state: RootState) => state.contacts)
	const dispatch = useDispatch()
	console.log(contacts)

	const [addContactModal, setAddContactModal] = useState(false)
	const [isContactEdit, setIsContactEdit] = useState('')
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm()
	const onSubmit = (data: object) => {
		console.log(data)
		if (isContactEdit) {
			dispatch(editContact({ ...data, id: isContactEdit }))
		} else {
			data = { ...data, id: uuidv4() }
			dispatch(addContact(data))
		}
		setAddContactModal(false)
		setIsContactEdit('')
		reset()
	}
	const handleEditContact = (id: string) => {
		setIsContactEdit(id)
		setAddContactModal(true)
		let contactsData = JSON.parse(JSON.stringify(contacts.data))
		contactsData = contactsData.find((v: any) => v.id === id)
		Object.entries(contactsData).map(([key, value]) => {
			setValue(key, value)
		})
	}
	const handleDeleteContact = (id: string) => {
		dispatch(deleteContact(id))
	}

	return (
		<>
			<div className='p-4 sm:px-6 lg:px-8 '>
				<div className='text-end '>
					<Button className='' onClick={() => setAddContactModal(true)}>
						Add New Contact
					</Button>
				</div>
				<div className='overflow-x-auto max-w-[85vw] sm:max-w-[100%] mx-auto'>
					<table className='min-w-full text-left text-sm font-light'>
						<thead className='border-b font-medium dark:border-neutral-500'>
							<tr>
								<th scope='col' className='px-6 py-4'>
									#
								</th>
								<th scope='col' className='px-6 py-4'>
									First Name
								</th>
								<th scope='col' className='px-6 py-4'>
									Last Name
								</th>
								<th scope='col' className='px-6 py-4'>
									Status
								</th>
								<th scope='col' className='px-6 py-4'>
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{contacts.data.map((value, index) => (
								<tr key={'contact-' + index} className='border-b dark:border-neutral-500'>
									<td className='whitespace-nowrap px-6 py-4 font-medium'>{value.id}</td>
									<td className='whitespace-nowrap px-6 py-4'>{value.firstname}</td>
									<td className='whitespace-nowrap px-6 py-4'>{value.lastname}</td>
									<td className='whitespace-nowrap px-6 py-4'>{value.status}</td>
									<td className='whitespace-nowrap px-6 py-4'>
										<div className='flex gap-3'>
											<Button onClick={() => handleEditContact(value.id)}>Edit</Button>
											<Button onClick={() => handleDeleteContact(value.id)}>
												Delete
											</Button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<Modal open={addContactModal} handleClose={() => setAddContactModal(false)}>
				<div className='max-w-screen-md mx-auto p-5 bg-white '>
					<div className='text-center mb-16'>
						<h3 className='text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900'>
							Add <span className='text-indigo-600'>Contacts</span>
						</h3>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className='w-full'>
						<div className='flex flex-wrap -mx-3 mb-4'>
							<div className='w-full  px-3 mb-6 md:mb-0'>
								<Input
									label='First Name'
									input={{ ...register('firstname', { required: true }) }}
								/>
							</div>
							<div className='w-full  px-3'>
								<Input
									label='Last Name'
									input={{ ...register('lastname', { required: true }) }}
								/>
							</div>
						</div>
						<div className='flex justify-between w-full mb-6'>
							<div className=''>
								<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 '>
									Status
								</label>
								<InputRadio
									label='Active'
									input={{ value: 'Active', ...register('status', { required: true }) }}
								/>
								<InputRadio
									label='Inactive'
									input={{ value: 'Inactive', ...register('status', { required: true }) }}
								/>
							</div>
						</div>
						<div className=''>
							<Button type='submit'>
								{(isContactEdit && 'Update Contact') || 'Add Contact'}
							</Button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	)
}

export default Contact
