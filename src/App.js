import CompareCards from './components/compare-card/CompareCards';
import Facilities from './components/facilities';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeroSection from './components/hero-section/HeroSection';
import PopularCards from './components/popular-cards/PopularCards';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Facilities />
      <PopularCards />
      <CompareCards />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
