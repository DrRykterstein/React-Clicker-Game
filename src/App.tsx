import { useEffect, useState } from 'react';
import axios from 'axios';
import { CounterProvider } from './contexts/counterContext';
import { CostsProvider } from './contexts/costsContext';
import Header from './components/header';
import Costs from './components/costs';
import Clicker from './components/clicker';
import Shop from './components/shop';

const App: React.FC = () => {
  const [clicker, setClicker] = useState("");

  useEffect(() => {
    const fetchClickerImage = async () => {
      try {
        const config: object = {'Authorization': process.env.REACT_APP_API_KEY}
        const { data }= await axios.get(
          'https://api.pexels.com/v1/search?query=animal', 
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
        <CostsProvider>
          <Header />
          <Shop />
          <Costs />
        </CostsProvider>
        <Clicker clicker={clicker} />
      </CounterProvider>
    </div>
  );
}

export default App;
