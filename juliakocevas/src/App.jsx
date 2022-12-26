import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Pages components
import StartPage from './components/StartPage';
// import Sass
import './scss/main.scss';

export default function App() {
  return (
    <>
      <StartPage />
    </>
  );
}
