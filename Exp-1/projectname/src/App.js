import './App.css';

import Header from "./components/Header";
import { HighImpact } from "./data/logs";
import Dashboard1 from "./pages/dashboard1";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard1 />
      <HighImpact />
    </div>
  );
}

export default App;
