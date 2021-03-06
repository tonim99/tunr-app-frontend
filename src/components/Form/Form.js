import React, { useState } from 'react';
import './Form.css'
const Form = (props) => {
	const [song, setSong] = useState({})

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
		props.getPlaylist()
	};
	return (
		<div className="form-container">
			<h2>ADD A NEW SONG</h2>
			<form className="form" onSubmit={submit}>
				<input
					type='text'
					placeholder='TITLE'
					onChange={(e) => setSong({ ...song, title: e.target.value })}
				/>
				<input
					type='text'
					placeholder='ARTIST'
					onChange={(e) => setSong({ ...song, artist: e.target.value })}
				/>
				<br />
				<input className="add-button" type='submit' value='ADD NEW SONG'/>
			</form>
		</div>
	);
};

export default Form;
