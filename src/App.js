import React, { useEffect, useState }from 'react';
import './App.css';
import Playlist from './components/Playlist';
import Favorites from './components/Favorites';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [songs, setSongs] = useState([])
  const url = 'http://localhost:3000/songs';
  
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
  }, [])
	return (
		<div className='App'>
			<Header />
			<Playlist songs={songs} key={songs.id}/>
			<Favorites />
			<Form />
		</div>
	);
}

export default App;
