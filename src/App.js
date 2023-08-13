import './App.css';
import Break from './components/Break/Break';
import Navigation from './components/Navbar/Navigation';
import AllRoutes from './components/Routes/AllRoutes';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navigation/>
      <Break/>
      <AllRoutes/>
      <Sidebar/>
    </div>
  );
}

export default App;
