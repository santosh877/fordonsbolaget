import logo from './logo.svg';

import Header from './Components/Navbar/Header/Header';
import Slider  from './Components/Slider';
import Recommendations from './Components/Recommendations'
 

function App() {
  return (
    <div >
      <Header />
      <Slider/>
      <Recommendations/>
    </div>
  );
}

export default App;
