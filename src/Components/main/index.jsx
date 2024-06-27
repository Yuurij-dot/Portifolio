import ImageMain from '../../assets/html_css_js_logo.jpg'
import './styles.css'
export default function Main(){
    return(
        <main className="w-full flex justify-between ">

            <div>
                <div className="flex flex-col mt-28">
                    <span className="text-3xl text-gray-800">Sejá Bem-vindo ao meu portifolio,</span>
                    <h3 className="text-3xl font-bold text-blue-500 ">Yuri de Jesus</h3>
                    <span className="text-2x1 text-gray-800">Um jovem Desenvolvedor Web em busca de oportunidades na área.</span>
                    <button className="mt-5 w-64 border rounded p-3 bg-green-500 text-white hover:scale-110">Conheça meus Projetos</button>
                </div>

                <div className="flex mt-2">
                    <a className="text-2xl hover:scale-110" href=""><i class="fa-brands fa-instagram hover:text-red-500"></i></a>
                    <a className="text-2xl hover:scale-110 mx-4" href=""><i class="fa-brands fa-github hover:text-blue-500"></i></a>
                    <a className="text-2xl hover:scale-110" href=""><i class="fa-brands fa-whatsapp hover:text-green-500"></i></a>
                </div>
            </div>

            <div className='flex items-center mr-20 mt-16'>
                <img src={ImageMain} alt="Imagem 1"  className='image-main max-w-96'/>
            </div>
      </main>
    )
}