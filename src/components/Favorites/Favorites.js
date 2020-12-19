import React from 'react';
import './Favorites.css'
const Favorites = (props) => {
	//const url = 'https://tunr-app-api-tm.herokuapp.com/songs';
	const { favorites } = props;
	return (
		<div className="Favorites">
			<h1>Favorite Songs List</h1>
			{favorites &&
				favorites.map((favorite) => {
					return (
						<div className='Song'>
							<h3>
								{favorite.title} by {favorite.artist}
							</h3>
							<p
								onClick={() => {
									props.toggleFave(favorite);
								}}>
								<i className='fas fa-minus'></i>
							</p>
						</div>
					);
				})
			}
		</div>
	);
};

export default Favorites;
