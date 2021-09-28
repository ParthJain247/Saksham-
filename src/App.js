import './App.css';
import Homepage from './Components/Homepage';
import NavigationBar from './Components/NavigationBar';
import ContactForm from './Components/campaign';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Homepage />
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;
