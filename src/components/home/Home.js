import './Home.css';
import Header from '/home/hind/travel/src/components/header/Header.js';
import Tours from  '/home/hind/travel/src/components/tours/Tours.js';
import Footer from '/home/hind/travel/src/components/footer/Footer.js';
import data from '/home/hind/travel/src/data/db.json'



function Home(props) {
    return (
      <>
      
      <Header  pp="hind"/>
      <Tours   data={data}/>
      <Footer h="aa"/>
      </>
   );
  }
  
  export default Home;