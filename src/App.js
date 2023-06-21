import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading'
import Carousel from './Components/Carousel';
import TextPic from './Components/Racing';

function App() {
  return (
    <div className="App">
    <Heading />
    <Carousel />
    <body className="App-header">
    <TextPic />
    </body>
    </div>
  );
}

export default App;

