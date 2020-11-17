import React from 'react';
import './Favorites.css'
const Favorites = (props) => {
	console.log('favorites props- ', props)
	//const url = 'https://tunr-app-api-tm.herokuapp.com/songs';
	const { favorites } = props;
	return (
		<>
			<h1>Favorite Songs List</h1>
			{favorites &&
				favorites.map((favorite) => {
					return (
						<>
							<h3>{favorite.title}</h3>
							<p>{favorite.artist}</p>
						</>
					)
				})
			}
		</>
	);
};

export default Favorites;
