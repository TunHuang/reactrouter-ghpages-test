import Nav from "./components/Nav.jsx"
import {Outlet} from 'react-router-dom'


function App() {


  return (
    <>
      <Nav />
      <Outlet context={{anton: "123413414123412412"}}/>
    </>
  )
}

export default App
