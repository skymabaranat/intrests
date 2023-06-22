import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading'
import Carousel from './Components/Carousel';
import TextPic from './Components/Racing';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';

import Mulan from './Components/images/Mulan.png'
import Style from './Components/images/1989.jpeg'
import Friends from './Components/images/Friends.jpeg'
import ferrari from './Components/images/Ferrari.jpeg'
import twd from './Components/images/taekwondo.jpeg'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Carousel first={Mulan} second={Style} third={Friends} />
    <body className="App-header">
      <Heading title="Ariana's Interests"/>
      <TextPic title="Racing" image={ferrari} desc="Motorsports is probably my biggest interest. On the weekend, you probably catch me watching anything which travels over 100mph including Formula 1,2,3 and Indycar. I follow many different drivers but I won't bore you with the details." />
      <br></br>
      <Heading title="Harkiran's Interests"/>
      <Cards />
      <TextPic title="Martial Arts" image={twd} desc="Martial Arts is one of my many interests. I used to practice karate and may continue soon. I love the thrill of the sport, it is the one thing that makes my life complete, hitting other people for fun." />
    </body>
    </div>
  );
}

export default App;

