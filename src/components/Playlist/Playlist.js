import React, { useState } from 'react';
import './Playlist.css'

const Playlist = (props) => {
	console.log('playlist props-', props)

	const url = 'https://tunr-app-api-tm.herokuapp.com/songs';
	const { songs } = props;
	const [song, setSong] = useState(props.songs)
		const favToggle = (e) => {
			e.preventDefault();
			fetch(`${url}/${songs.id}`, {
				method: 'PUT',
				body: JSON.stringify({ songs }),
				headers: { 'Content-Type': 'application/json' },
			})
				.then((res) => res.json())
				.then((json) => setSong(json.song));
		};
	const deleteSong = (e) => {
		e.preventDefault();
		fetch(`${url}/${songs.id}`, {
			method: 'DELETE',
		})
		.then((res) => res.json());
	};

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
