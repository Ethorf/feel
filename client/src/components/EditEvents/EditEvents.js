import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Dialog, Container, Button } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import '../../pages/schedule/schedule.scss';
import './editEvents.scss';

export default function EditEvents() {
	let myEvents = [
		{
			title: 'Yoga',
			eventstart: moment(`2020-09-8 09:00`).toDate(),
			eventend: moment(`2020-09-8 10:00`).toDate(),
			is_cancelled: false,
			description: 'Come yoga with billy',
			id: 900000
		}
	];
	const [activeEvents, setActiveEvents] = useState(myEvents);
	const [eventFormInputs, setEventFormInputs] = useState({
		title: '',
		date: '',
		eventstart: '',
		eventend: '',
		description: ''
	});
	const { title, date, description } = eventFormInputs;
	let eventstart = moment(`${date} ${eventFormInputs.eventstart}`).toDate();
	let eventend = moment(`${date} ${eventFormInputs.eventend}`).toDate();
	const onChange = (e) => setEventFormInputs({ ...eventFormInputs, [e.target.name]: e.target.value });
	const addEvent = async () => {
		try {
			const body = { title, eventstart, eventend, description };
			const response = await fetch('/events/newEvent', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					jwt_token: localStorage.getItem('token')
				},
				body: JSON.stringify(body)
			});
		} catch (err) {
			console.log('Error Adding Post');
		}
	};

	const submitForm = async (e) => {
		await addEvent();
		setEventFormInputs({
			title: '',
			date: '',
			eventstart: '',
			eventend: '',
			description: ''
		});
	};

	const Event = (props) => {
		const toggleDeleteModal = () => {
			setDeleteModalOpen(!deleteModalOpen);
		};
		const [deleteModalOpen, setDeleteModalOpen] = useState(false);

		return (
			<div className="event">
				<h3>{props.title}</h3>
				<div className="event__info">
					<span>Start:{moment(props.eventstart).format('MMMM Do , h:mm a')}</span>
					<span>End:{moment(props.eventend).format('MMMM Do , h:mm a')}</span>
					{props.is_cancelled === false ? (
						<button onClick={() => cancelEvent(props.id, 'cancel')}>Cancel</button>
					) : (
						<button onClick={() => cancelEvent(props.id, 'uncancel')}>Uncancel</button>
					)}
					<button onClick={toggleDeleteModal}>Delete</button>
				</div>
				<Dialog color="secondary" open={deleteModalOpen} className={`entry__delete-modal`}>
					<Container className={`entry__delete-modal-container`}>
						<h3 className="entry__delete-modal-text">Are you sure you want to delete this entry?</h3>
						<div className="entry__delete-modal-buttons-container">
							<Button
								onClick={() => {
									deleteEvent(props.id);
									toggleDeleteModal();
								}}
								className="entry__delete-modal-button"
							>
								Yes
							</Button>
							<Button onClick={toggleDeleteModal} className="entry__delete-modal-button">
								No
							</Button>
						</div>
					</Container>
				</Dialog>
			</div>
		);
	};
	const getEvents = async () => {
		try {
			const res = await axios.get('/events/getAllEvents');
			let map1 = res.data.map((item) => {
				const newObj = {};
				newObj.title = item.title;
				newObj.description = item.description;
				newObj.is_cancelled = item.is_cancelled;
				newObj.eventstart = item.eventstart;
				newObj.eventend = item.eventend;
				newObj.id = item.id;
				return newObj;
			});
			await setActiveEvents(map1);
		} catch (err) {
			console.log('error getting calendar events');
		}
	};
	const cancelEvent = async (id, cancel) => {
		try {
			const res = await fetch(`/events/${cancel}Event/${id}`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					jwt_token: localStorage.getItem('token')
				}
			});
			await getEvents();
		} catch (error) {
			console.log('error cancelling event');
		}
	};
	const deleteEvent = async (id) => {
		try {
			const res = await fetch(`/events/deleteEvent/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json',
					jwt_token: localStorage.getItem('token')
				}
			});
			await getEvents();
		} catch (error) {
			console.log('error deleting event');
		}
	};
	useEffect(() => {
		getEvents();
	}, []);
	console.log(activeEvents);
	return (
		<div className={`edit-events`}>
			<h1>Events</h1>
			<form onSubmit={submitForm} className="create-event__form">
				<h2>Create Event</h2>
				<input
					placeholder="title"
					className={`create-event__title-input`}
					type="title"
					name="title"
					onChange={(e) => onChange(e)}
				></input>
				<TextField
					id="date"
					label="Date"
					type="date"
					name="date"
					defaultValue={Date()}
					InputLabelProps={{
						shrink: true
					}}
					onChange={(e) => onChange(e)}
				/>
				<TextField
					id="eventstart"
					label="Start Time"
					type="eventstart"
					defaultValue="07:30"
					name="eventstart"
					InputLabelProps={{
						shrink: true
					}}
					inputProps={{
						step: 300 // 5 min
					}}
					onChange={(e) => onChange(e)}
				/>
				<TextField
					id="eventend"
					label="End Time"
					type="eventend"
					name="eventend"
					defaultValue="07:30"
					InputLabelProps={{
						shrink: true
					}}
					inputProps={{
						step: 300 // 5 min
					}}
					onChange={(e) => onChange(e)}
				/>
				<textarea
					className="create-event__form-description"
					label="Description"
					type="description"
					name="description"
					onChange={(e) => onChange(e)}
					defaultValue="event description"
				></textarea>
				<button type="submit">Create</button>
			</form>
			<h1>Edit Events</h1>
			{activeEvents.map((item) => {
				return (
					<Event
						title={item.title}
						eventstart={item.eventstart}
						eventend={item.eventend}
						description={item.description}
						is_cancelled={item.is_cancelled}
						id={item.id}
					/>
				);
			})}
		</div>
	);
}
