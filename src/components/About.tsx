import Fundo1 from "../assets/pic.png"
import Products from '../assets/product.png'


const About = () => {
  return (
    <main style={{
      backgroundImage: `url(${Fundo1})`
    }} className="w-full h-full lg:h-screen bg-no-repeat bg-cover mt-[90px]">
      <div className='w-full flex justify-between items-center h-full p-2'>
        <div className='p-6 w-[50%] flex flex-col gap-4 text-white drop-shadow-[2px_2px_10px_black] bg-yellow-500 rounded-tr-xl rounded-b-xl ml-2 textShadow'>
          <h2 className='text-3xl text-green-400 font-bold mb-2'>Sobre o Green Whey</h2>
          <p>
            Se você está procurando um suplemento de fitness de alta qualidade, o Green Whey da Green Force é a escolha certa para você. Este produto a base de vegetais é feito com ingredientes selecionados cuidadosamente para fornecer ao seu corpo os nutrientes que precisa para alcançar seus objetivos de fitness.
          </p>
          <p>
            O Green Whey é rico em proteínas, minerais e vitaminas, fornecendo uma solução equilibrada e saudável para suprir as necessidades nutricionais do seu corpo durante os exercícios físicos. Além disso, é fácil de digerir, sem adição de açúcares ou conservantes artificiais, tornando-o uma escolha perfeita para aqueles que se preocupam com a saúde.
          </p>
          <p>
            A Green Force é conhecida por seus produtos de alta qualidade e é uma empresa comprometida com a sustentabilidade e o bem-estar dos seus consumidores. Ao escolher o Green Whey, você estará apoiando uma empresa ética e sustentável, e ao mesmo tempo, fornecendo ao seu corpo os nutrientes que precisa para se sentir forte e saudável.
          </p>

          <button className=' border-4 border-yellow-600 mx-auto text-white drop-shadow-[0px_0px_2px_black] text-2xl flex rounded-xl group hover:brightness-200'>
            <b className='bg-green-700 w-[140px]   p-2 rounded-lg drop-shadow-[0px_0px_2px_black] group-hover:brightness-50'>
              <p className='group-hover:text-yellow-500 group-hover:brightness-200'>Comprar</p>
            </b>
          </button>
        </div>

        <img src={Products}
          className="w-[380px] h-[400px] lg:w-[700px] lg:h-[700px] drop-shadow-[9px_180px_40px_black] lg:drop-shadow-[9px_200px_40px_black]" />
      </div>
    </main>
  )
}

export default About