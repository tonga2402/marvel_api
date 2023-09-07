import { useState , useEffect } from "react"
import { Routes , Route } from 'react-router-dom'
import Comics from '../components/Comics'
import CharactersList from '../components/CharactersList'
import { getCharacters } from '../services/getCharacters'

const  Characters = () => {

  const [ characters , useCharacters ] = useState([]);

  useEffect(() => {
    (async () => {
      const characterData = await getCharacters();
      useCharacters(characterData);
    })();
  }, []);


  return (
    <div>
          <Routes>
            <Route index element={<CharactersList characters={characters}/>}/>
            <Route path=':characterId' element={<Comics/>}/>
          </Routes>
        </div>
  )
}
export default Characters
