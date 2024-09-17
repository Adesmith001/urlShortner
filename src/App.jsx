import './App.css';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Shortening from './components/Shortening/Shortening';
import Statistics from './components/Statistics/Statistics';

const App = () => {

  return (
    <div className='App'>
      <Header />

      <Hero />

      <Shortening />

      <Statistics />

      <Boost />

      <Footer />
    </div>
  );
}

export default App
