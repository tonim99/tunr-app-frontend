import React from 'react';
import './Playlist.css'

const Playlist = (props) => {
	console.log('playlist props-', props)

	//const url = 'https://tunr-app-api-tm.herokuapp.com/songs';
	const { songs } = props;
	

	return (
		<>
			<h1>Playlist 1</h1>
			{songs &&
				songs.map((song) => {
					return (
						<>
							<h3>{song.title}</h3>
							<p> {song.time} </p>
							<p>{song.artist}</p>
							<p
								onClick={() => {
									props.handleFave(song);
								}}>
								heart icon
							</p>
							<p
								onClick={() => {
									props.deleteSong(song);
								}}>
								x
							</p>
							{/* {songs[ind].is_fav} */}
						</>
					);
				})
			}
		
		</>
	);
};

export default Playlist;
