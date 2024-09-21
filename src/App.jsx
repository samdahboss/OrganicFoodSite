import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="relative">
    <Navbar />
    <main className=" flex flex-col w-full bg-[#FBFAF8]">
      <Outlet/>
    </main>
      <Footer/>
    </div>
  )
}

export default App
