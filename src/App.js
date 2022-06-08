import { Navigation } from './components/navigation/Navigation';
import {Routing} from './routes/Routes'
import { UserProvider } from './shared/provider/UserProvider';
import { Footer } from './components/footer/Footer';
import { CountProvider } from './shared/provider/CountProvider';

function App(){
  return (

    <UserProvider>
      <CountProvider>
      <Routing>
        <Navigation/>
      </Routing>
      <Footer/>
    </CountProvider>
    </UserProvider>
    
  )
}

// För att komma åt den i andra js filer. 
// Export default exporterar en komponent
export default App; 

