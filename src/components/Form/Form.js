import React from 'react';
import './Form.css'
const Form = (props) => {
	return (
		<div>
			<h2>ADD A NEW SONG</h2>
			<form>
				<label>TITLE</label>
				<input type='text'></input>
				<label>ARTIST</label>
				<input type='text'></input>
				<label>TIME</label>
				<input type='text'></input>
				<button>ADD NEW SONG</button>
			</form>
		</div>
	);
};

export default Form;
