import './App.css';
import Heading from './Components/Heading'
import Carousel from './Components/Carousel';
import TextPic from './Components/Racing';
import Navbar from './Components/Navbar';

function APage() {
  return (
    <div className="App">
    <Navbar />
    <Carousel />
    <body className="App-header">
    <Heading title="Ariana's Interests"/>
    <TextPic />
    </body>
    </div>
  );
}

export default APage;

