import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import { Dialog } from '@material-ui/core';
//Styles Imports
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './schedule.scss';

const Schedule = () => {
	let myEvents = [
		{
			title: 'Yoga',
			eventstart: moment(`2020-09-15 09:00`).toDate(),
			eventend: moment(`2020-09-15 12:00`).toDate(),
			description: 'Come yoga with billy',
			id: 900000
		}
	];
	const [activeEvents, setActiveEvents] = useState(myEvents);
	const localizer = momentLocalizer(moment);

	const CustomEvent = (props) => {
		const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
		console.log(props);
		return (
			<div onClick={() => setDescriptionModalOpen(!descriptionModalOpen)}>
				<Dialog open={descriptionModalOpen}>
					<div className="schedule__description-modal-container">
						<div className="schedule__description-modal-time-container">
							<span>{moment(props.event.eventstart).format('hh:mma').toString()}</span>-
							<span>{moment(props.event.eventend).format('hh:mma MMM do').toString()}</span>
						</div>

						<p>{props.event.description}</p>
						<h2
							className="schedule__close-button"
							onClick={() => setDescriptionModalOpen(!descriptionModalOpen)}
						>
							x
						</h2>
					</div>
				</Dialog>
				<h4
					className="schedule__calendar-event-title"
					style={
						props.event.is_cancelled === true
							? { textDecoration: 'line-through' }
							: { textDecoration: 'none' }
					}
				>
					{props.title}
				</h4>
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
				newObj.eventstart = moment(item.eventstart).toDate();
				newObj.eventend = moment(item.eventend).toDate();
				return newObj;
			});
			await setActiveEvents(map1);
		} catch (err) {
			console.log('error getting calendar events');
		}
	};
	useEffect(() => {
		getEvents();
	}, []);
	console.log(activeEvents);
	return (
		<div className="view">
			<div className="schedule content default-page">
				<h1 className="default-page__header">Class Schedule</h1>
				<div className="schedule__calendar-container">
					<Calendar
						defaultView="week"
						localizer={localizer}
						events={activeEvents}
						startAccessor="eventstart"
						endAccessor="eventend"
						components={{
							event: CustomEvent
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
