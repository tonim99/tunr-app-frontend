import React from 'react';
import './Playlist.css'

const Playlist = (props) => {
	console.log('playlist props-', props)

	//const url = 'https://tunr-app-api-tm.herokuapp.com/songs';
	const { songs } = props;
	

	return (
		<div className= "Playlist">
			<h1>Playlist 1</h1>
			{songs &&
				songs.map((song) => {
					return (
						<div className='Song'>
							<h3>
								{song.title} by {song.artist}
							</h3>
							<div className='favDelete'>
								<p
									className='item'
									onClick={() => {
										console.log('song- ', song);
										props.handleFave(song);
									}}>
									<i class='fas fa-heart'></i>
								</p>

								<p
									className='item'
									onClick={() => {
										props.deleteSong(song);
									}}>
									<i class='fas fa-minus'></i>
								</p>
							</div>
						</div>
					);
				})
			}
		
		</div>
	);
};

export default Playlist;
