import React, { useEffect, useState }from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
  const [songs, setSongs] = useState([])
  //const [selectedSong, setSelectedSong] = useState({})
  const [favorites, setFavorites] = useState([])

  const url = 'https://tunr-app-api-tm.herokuapp.com/songs';
  const makeAPICall = async () => {
		try {
			const res = await fetch(`${url}`);
			const json = await res.json();
			console.log(json);
			setSongs(json);
		} catch (err) {
			console.error(err);
		}
	};
  
  useEffect(() => {
    makeAPICall()
  }, [])


  	const handleFave = (favorite) => {
			setFavorites([...favorites, favorite])
    };
    
		const deleteSong = (song) => {
			fetch(`${url}/${song.id}`, {
				method: 'DELETE',
			}).then((res) => makeAPICall());
    };
    
  //  const toggleFave = (favorite) => {
  //   fetch(`${url}/${favorite.id}`, {
  //     method: 'PUT', 
  //     body: JSON.stringify({ 
  //       is_fav: true
  //     })
  //   }).then((res) => )
  //  }
  // const handleDelete = () => {

  // }

	return (
		<div className='App'>
			<Header />
			<Playlist
				songs={songs}
				key={songs.id}
				handleFave={handleFave}
				deleteSong={deleteSong}
			/>
			<Favorites favorites={favorites} key={favorites.id} />
			<Form songs={songs} key={songs.id} makeAPICall={makeAPICall} />
		</div>
	);
}

export default App;
