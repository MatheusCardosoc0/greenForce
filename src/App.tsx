import Navbar from "./components/Navbar"
import Fundo1 from "./assets/pic.png"


function App() {

  return (
   <section className='w-full flex flex-col justify-center'>
     <Navbar />
     
     <div style={{
      backgroundImage: `url(${Fundo1})`
     }} className="w-full h-screen bg-no-repeat bg-cover mt-[60px]">
      aaaaa
     </div>
   </section>
  )
}

export default App
