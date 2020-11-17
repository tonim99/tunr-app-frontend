import React from 'react';
import './Favorites.css'
const Favorites = (props) => {
	console.log('favorites props- ', props)
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
									console.log('favorite ', favorite);
									props.toggleFave(favorite);
								}}>
								<i class='fas fa-minus'></i>
							</p>
						</div>
					);
				})
			}
		</div>
	);
};

export default Favorites;
