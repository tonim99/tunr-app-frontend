import React, { useState } from 'react';
import './Form.css'
const Form = (props) => {
	console.log('form props- ', props)
	const [song, setSong] = useState(props.song)

	const submit = (e) => {
		e.preventDefault();
		fetch('https://tunr-app-api-tm.herokuapp.com/songs', {
			method: 'POST',
			body: JSON.stringify({ song }),
			headers: { 'Content-Type': 'application/json' },
		})
			.then((res) => res.json())
			.then((json) => setSong(json.song));
		e.target.reset()	
	};
	return (
		<div>
			<h2>ADD A NEW SONG</h2>
			<form onSubmit={submit}>
				<label>TITLE</label>
				<input
					type='text'
					onChange={(e) => setSong({ ...song, title: e.target.value })}
				/>
				<label>ARTIST</label>
				<input
					type='text'
					onChange={(e) => setSong({ ...song, artist: e.target.value })}
				/>
				<label>TIME</label>
				<input
					type='text'
					onChange={(e) => setSong({ ...song, time: e.target.value })}
				/>
				<input type='submit' value='ADD NEW SONG'/>
			</form>
		</div>
	);
};

export default Form;
