import { Outlet } from "react-router"
import { Footer, Header } from "./components"
function App() {

  return (
    <div className='mx-auto'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
