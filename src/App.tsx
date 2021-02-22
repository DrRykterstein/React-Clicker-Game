import { useEffect, useState } from 'react';
import axios from 'axios';
import { CounterProvider } from './contexts/counterContext';
import { UpgradesProvider } from './contexts/upgradesContext';
import Header from './components/header';
import Shop from './components/shop';
import Clicker from './components/clicker';

const App: React.FC = () => {
  const [clicker, setClicker] = useState("");

  useEffect(() => {
    const fetchClickerImage = async () => {
      try {
        const config: object = {'Authorization': process.env.REACT_APP_API_KEY}
        const { data }= await axios.get(
          'https://api.pexels.com/v1/search?query=predator&orientation=landscape&per_page=50', 
          {headers: config}
        );
        // Initialize and store random photo within clicker state
        const photo = randomizePhotoIndex(data.photos);
        setClicker(photo);
      } catch(err) {
        console.error(err);
      }
    }
    fetchClickerImage();
  }, []);

  // Selects a random photo index based on data
  function randomizePhotoIndex(photos: Array<any>) {
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex].src.small;
  }

  return (
    <div className="App">
      <CounterProvider>
        <UpgradesProvider>
          <Header />
          <Clicker clicker={clicker} />
          <Shop />
        </UpgradesProvider>
      </CounterProvider>
    </div>
  );
}

export default App;
