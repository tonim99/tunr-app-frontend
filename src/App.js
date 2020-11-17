import React, { useEffect, useState }from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
	const [songs, setSongs] = useState([])
	const [favorites, setFavorites] = useState([])
	const url = 'https://tunr-app-api-tm.herokuapp.com/songs';

	const getPlaylist = async () => {
		try {
			const res = await fetch(`${url}`);
			const playlist = await res.json();
			console.log("playlist- ", playlist);
			setSongs(playlist)
			const faves = playlist.filter((song) => song.is_fav === true);
			setFavorites(faves)
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getPlaylist()
	}, [])
    
	const deleteSong = (song) => {
		fetch(`${url}/${song.id}`, {
			method: 'DELETE',
		}).then((res) => getPlaylist());
	};
    
	const toggleFave = (song) => {
		console.log('song app -', song)
		fetch(`${url}/${song.id}`, {
			method: 'PUT', 
			body: JSON.stringify({ 
			is_fav: !song.is_fav
			}),
			headers: { 'Content-Type': 'application/json' },
		}).then((res) => getPlaylist())
	}

   	const handleFave = (favorite) => {
		toggleFave(favorite)
		getPlaylist()
	};

	return (
		<div className='App'>
			<Header />
			<Playlist
				songs={songs}
				key={songs.id}
				handleFave={handleFave}
				deleteSong={deleteSong}
			/>
			<Favorites favorites={favorites} toggleFave={toggleFave} key={favorites.id} />
			<Form songs={songs} key={songs.id} getPlaylist={getPlaylist} />
		</div>
	);
}

export default App;
