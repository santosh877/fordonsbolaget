import logo from './logo.svg';

import Header from './Components/Navbar/Header/Header';
import Slider  from './Components/Slider';
import Recommendations from './Components/Recommendations';
import ReceivedNewCar from "./Components/ReceivedNewCar";
import Newsletter from "./Components/Newsletter";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs"
 

function App() {
  return (
    <div >
      <Header />
      <Slider/>
      <Recommendations/>
      <ReceivedNewCar/>
      <Newsletter/>
      <Services/>
      <AboutUs/>
    </div>
  );
}

export default App;
