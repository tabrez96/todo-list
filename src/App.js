import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Todos from './components/Todos';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="./todos" replace />} />
        <Route path="todos/*" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
