import './App.css';
import Navbars from './Components/Navbars';
import TextFrom from './Components/TextFrom';

function App() {
  return (
    <>
    <Navbars title="TextUtil" About="About Us"/>
    <div className="containers">
      <TextFrom heading="Enter the Text here"/>
    </div>
</>
  );
} 
export default App;
