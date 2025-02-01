import Footer from "./component/Footer"
import Dashboard from "./component/Dashboard"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import BackgroundLayout from "./layout/BackgroundLayout"

const App = () => {
  return (
    <BackgroundLayout>
      
      <Navbar/>
      <div className="flex justify-between gap-x-10">
      <Sidebar/>
      <Dashboard/>
      </div>
      <Footer/>
    </BackgroundLayout>
  )
}

export default App