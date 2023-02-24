import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/scss/main.scss';
import Home from './Pages/Home.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
