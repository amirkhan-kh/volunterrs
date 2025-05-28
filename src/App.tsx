import { Outlet } from "react-router"
import { Footer, Header } from "./components"
import './index.css'
function App() {

  return (
    <div className=''>
      <Header/>
      <main className="min-h-screen">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
