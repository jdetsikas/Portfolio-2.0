
import './App.scss';
import { Body, Footer, Header } from './components';

function App() {
  return (
    <div id="app" className="col">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />
      <div className="noise" />

      <div id="content-area" className="col">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
