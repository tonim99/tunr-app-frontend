import React, { useEffect, useState }from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App() {
  const [songs, setSongs] = useState([])
  // const [favorite, setFavorite] = useState([])

  const url = 'https://tunr-app-api-tm.herokuapp.com/songs';
  
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await
          fetch(`${url}`)
          const json = await res.json()
          console.log(json)
          setSongs(json)
      } catch (err) {
        console.error(err)
      }
    }
    makeAPICall()
  }, [songs])
  // const handleFave = () => {
    
  // }
	return (
		<div className='App'>
			<Header />
			<Playlist songs={songs} key={songs.id}/>
			<Favorites />
			<Form songs={songs} key={songs.id}/>
		</div>
	);
}

export default App;
