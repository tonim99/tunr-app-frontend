import React, { useState } from 'react';
import './Favorites.css'
const Favorites = (props) => {
	
	const url = 'https://tunr-app-api-tm.herokuapp.com/songs';

	return (
		<div>
			<h1>Favorite Songs List</h1>
			<ul>
				<li>Song Artist Time</li>
			</ul>
		</div>
	);
};

export default Favorites;
