import Fundo2 from "../assets/fundo@.png"


const Offer = () => {
  return (
    <main style={{
      backgroundImage: `url(${Fundo2})`
    }} className="w-full h-full lg:h-screen bg-no-repeat bg-cover mt-[90px]">
      <div className='w-full flex justify-between items-center h-full p-2'>


        <img />

        <div className='p-6 w-[50%] flex flex-col gap-4 text-yellow-500 drop-shadow-[2px_2px_10px_black] bg-black rounded-tr-xl rounded-b-xl ml-2 textShadow'>
          <h2 className='text-3xl text-teal-500 font-bold mb-2'>Oportunidade Única</h2>
          <p>
            Além do Green Whey, a Green Force oferece uma ampla gama de outros produtos de fitness de alta qualidade a base de vegetais, incluindo suplementos de proteína, barras de proteína, snacks saudáveis e muito mais. Todos os produtos da Green Force são feitos com ingredientes de alta qualidade e são uma ótima escolha para aqueles que buscam melhorar sua saúde e bem-estar.

          </p>
          <p>
            E o melhor de tudo: agora você pode aproveitar uma promoção exclusiva de 22% em todos os produtos da Green Force! Esta oferta é válida apenas até o dia 23/02/2023, então não perca a oportunidade de experimentar os incríveis produtos da Green Force a preços acessíveis.

          </p>
          <p>
            Não perca mais tempo e experimente a Green Force hoje mesmo. Com sua ampla gama de produtos de alta qualidade e sua promoção atual, você não pode dar errado. Aproveite agora e comece a melhorar sua saúde e bem-estar de maneira fácil e acessível!
          </p>

          <button className=' border-4 border-yellow-600 mx-auto text-white drop-shadow-[0px_0px_2px_black] text-2xl flex rounded-xl group hover:brightness-200'>
            <b className='bg-black w-[140px]   p-2 rounded-lg drop-shadow-[0px_0px_2px_black] group-hover:brightness-50'>
              <p className='group-hover:text-yellow-500 group-hover:brightness-200'>Comprar</p>
            </b>
          </button>
        </div>
      </div>


    </main>
  )
}

export default Offer