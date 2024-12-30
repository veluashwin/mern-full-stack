import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './color.css'
import App from './App.jsx'
import Ashwin from './Ashwin.jsx'
//import Count from './Count.jsx'
// import Home from './Home.jsx'
// import Aboutus from './Aboutus.jsx'
// import Contact from './Contact.jsx'
import Task1 from './Task1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ashwin num="50" num1="100"/>
    {/* <Count /> */}
    {/* <Home />
    <Aboutus />
    <Contact /> */}
    <Task1 />

  </StrictMode>,
)



