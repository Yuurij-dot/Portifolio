import ImageMain from '../../assets/main-image.png'
import './styles.css'

export default function Main(){
    return(
        <main className="w-full mb-10 flex justify-between max-md:items-center max-md:justify-center">

            <div className=''>
                <div className="flex flex-col mt-28 max-md:items-center">
                    <span className="text-3xl text-slate-700">Sejá Bem-vindo ao meu portifolio,</span>
                    <h3 className="text-3xl font-bold text-primary-light ">Yuri de Jesus</h3>
                    <span className="text-2x1 text-slate-700">Um jovem Desenvolvedor Web em busca de oportunidades na área.</span>
                    <button className="mt-5 w-64 border rounded p-3 bg-primary-light text-white hover:scale-110">Conheça meus Projetos</button>
                </div>

                <div className="flex mt-2 max-md:justify-center">
                    <a className="text-2xl hover:scale-110" href=""><i className="fa-brands fa-instagram text-slate-700 hover:text-red-500"></i></a>
                    <a className="text-2xl hover:scale-110 mx-4" href=""><i className="fa-brands fa-github text-slate-700 hover:text-blue-500"></i></a>
                    <a className="text-2xl hover:scale-110" href=""><i className="fa-brands fa-whatsapp text-slate-700 hover:text-green-500"></i></a>
                </div>
            </div>

            <div className='flex items-center max-md:hidden'>
                <img src={ImageMain} alt="Imagem 1"  className='image-main max-w-96'/>
            </div>
      </main>
    )
}