import './App.css';
import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import MenuWeb from './components/menu-web/MenuWeb';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <>
      {console.log(`  
  ##   ##  #######  ######   ##   ##  #######  ##   ##  ##  ##
  ## # ##  ##       ##  ##   ### ###  ##       ##   ##  ##  ##
  ## # ##  ##       ##  ##   #######  ##       ###  ##  ##  ##
  ## # ##  #######  #######  ### ###  #######  ## # ##  ##  ##
  #######  ##       ##   ##  ##   ##  ##       ##  ###  ##  ##
  ### ###  ##       ##   ##  ##   ##  ##       ##   ##  ##  ##
  ##  ###  #######  #######  ##   ##  #######  ##   ##  ######

 `)}
      <Header></Header>
      <Hero></Hero>
      <AboutUs />
      <MenuWeb />
      <Portfolio />
      <Form />
      <Footer />
    </>
  );
}

export default App;
