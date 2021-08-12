import './index.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import Sections from './Components/Sections';
import ArticleOne from './Components/ArticleOne';

function App() {
  return (
    <div id='root'>
      <Navbar />
      <Main />
      <Sections />
      <ArticleOne />
    </div>
  );
}

export default App;
