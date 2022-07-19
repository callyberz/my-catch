import { Route, Routes } from 'react-router-dom';
import { MapComp } from './pages/Map';

const App = () => {
  return (
    <div className="App">
      <h1>Here is my catch!</h1>
      <Routes>
        <Route path="/" element={<MapComp />} />
      </Routes>
    </div>
  );
};

export default App;
