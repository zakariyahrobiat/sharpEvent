import Footer from "./component/footer/Footer";
import Dashboard from "./component/dashboard/Dashboard";
import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/Sidebar";
import BackgroundLayout from "./layout/BackgroundLayout";

const App = () => {
  return (
    <BackgroundLayout>
      <Navbar />
      <div className="flex justify-between gap-x-10">
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </BackgroundLayout>
  );
};

export default App;
