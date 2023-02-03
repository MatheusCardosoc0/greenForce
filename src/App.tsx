import About from "./components/About"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Offer from "./components/Offer"


function App() {

  return (
    <section className='w-full flex flex-col justify-center bg-[#efbf11]'>
      <Navbar />

      <About />
      <Offer />
      <Footer />
    </section>
  )
}

export default App
