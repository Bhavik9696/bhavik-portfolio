
import './App.css'
import ContactForm from './components/ContactForm'
import Homepage from './components/Homepage'
import Mydevtools from './components/Mydevassrails'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <div className="body">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Mydevtools></Mydevtools>
      <ContactForm></ContactForm>
      
    </div>
    
      
    </>
  )
}

export default App
