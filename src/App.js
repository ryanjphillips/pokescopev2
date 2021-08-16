import './index.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import Sections from './Components/Sections';
import ArticleOne from './Components/ArticleOne';
import { useState } from 'react'

function App() {
  const [backGroundColor, setBackGroundColor] = useState('#E5D255');
  const [gameOneOrder, setGameOneOrder] = useState(0);
  const [gameTwoOrder, setGameTwoOrder] = useState(0);
  const [gameThreeOrder, setGameThreeOrder] = useState(0);
  const [cartridgeBackground, setCartridgeBackground] = useState('yellow.png');
  const [sectionDescription, setSectionDescription] = useState('Test');

  function deterimneHighestOrder(...args){
    const argsList = [];
    args.forEach((item) => argsList.push(item));
    const argsListLen = argsList.length;
    return argsList.sort((a,b) => a - b)[argsListLen - 1]
  }

  return (
    <div id='root'>
      <Navbar drawTitle={true} drawIcons={true} drawDesc={true}/>
      <Main />
      <Navbar />
      <Sections gameOneClick={() => {
                console.log(cartridgeBackground)
                setBackGroundColor('#A0131B');
                setCartridgeBackground('red.png');
                setSectionDescription('Test3');  
                setGameOneOrder(deterimneHighestOrder(gameOneOrder, gameThreeOrder, gameTwoOrder ) + 1)}}
                changeGameOne={gameOneOrder}

                gameTwoClick={() => {
                setBackGroundColor('#292C61');
                setCartridgeBackground('blue.png')
                setSectionDescription("Test2");
                setGameTwoOrder(deterimneHighestOrder(gameOneOrder, gameThreeOrder, gameTwoOrder ) + 1)}}
                changeGameTwo={gameTwoOrder}

                gameThreeClick={() => {
                setBackGroundColor('#E5D255');
                setCartridgeBackground('yellow.png');
                setSectionDescription('Test') 
                setGameThreeOrder(deterimneHighestOrder(gameOneOrder, gameThreeOrder, gameTwoOrder ) + 1)}}
                changeGameThree={gameThreeOrder}          
                />
      <ArticleOne bgColor={backGroundColor} label={cartridgeBackground} text={sectionDescription}/>
      <Navbar />
    </div>
  );
}

export default App;