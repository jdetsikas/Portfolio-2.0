import './App.scss';
import { Body, Footer, Header } from './components';

function App() {
  return (
    <div id="app" className="col">

      <title>John Detsikas</title>
      <meta name="author" content="John Detsikas"/>

      <div id="content-area" className="col">

        <Header/>

        <Body/>

        <Footer/>

      </div>

    </div>
  );
};

export default App;
