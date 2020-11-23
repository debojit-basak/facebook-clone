
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Chat from './Chat'
import Login from './Login'

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (<Login />) : (
        <>
        <Header />
        {/* app body */}
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Chat />
    
        </div>
        </>
      )}
      
     
    </div>
  );
}

export default App;
