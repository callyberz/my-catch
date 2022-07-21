import { Route, Routes } from 'react-router-dom';
import { MapComp } from './pages/Map';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MapComp />} />
      </Routes>
    </div>
  );
};

export default App;
