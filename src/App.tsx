import { Outlet, useLocation } from "react-router-dom"
import { Footer, Header } from "./components"
import './index.css'
function App() {
 const location = useLocation();
  const hideFooterOnPaths = ["/profile-volunter"];
  return (
    <div className=''>
      <Header/>
      <main className="min-h-screen">
        <Outlet/>
      </main>
      {!hideFooterOnPaths.includes(location.pathname) && <Footer />}
    </div>
  )
}

export default App
