import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <div className="relative">
    <ScrollToTop />
    <Navbar />
    <main className="pt-[86px] flex flex-col w-full">
      <Outlet/>
    </main>
      <Footer/>
    </div>
  )
}

export default App
