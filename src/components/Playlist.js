import React from 'react';

const Playlist = (props) => {
	console.log('playlist props-', props)
	const {songs} = props

	return (
		<>
			<h1>Playlist 1</h1>
			{songs &&
				songs.map((ele, ind) => {
					return (
						<ul>
							<li>
								{songs[ind].title}
								<span> {songs[ind].time} </span>
								<span>{songs[ind].artist}</span>
								<span>{songs[ind].is_fav} heart icon</span>
							</li>
						</ul>
					)
				})
			}
		
		</>
	);
};

export default Playlist;
