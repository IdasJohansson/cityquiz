import { Navigation } from './components/navigation/Navigation';
import {Routing} from './routes/Routes'
import { UserProvider } from './shared/provider/UserProvider';
import { Footer } from './components/footer/Footer';

function App(){
  return (
    <UserProvider>
      <Routing>
        <Navigation/>
      </Routing>
      <Footer/>
    </UserProvider>
    
  )
}

// För att komma åt den i andra js filer. 
// Export default exporterar en komponent
export default App; 

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> THIS IS THE APP STARTPAGE</p>
      </header>
    </div>
  );
}

export default App;
*/
