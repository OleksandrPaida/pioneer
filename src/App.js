import './App.css';
import {Route, Routes} from "react-router-dom";

import {Gender} from "./components/gender/gender";

import Dashboard from "./components/dashboard/dashboard";
import {NotFound} from "./components/not-found/not-found";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={'/'} element={<Gender />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'/progress'} element={<Dashboard />} />
        <Route path={'/team'} element={<Dashboard />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
