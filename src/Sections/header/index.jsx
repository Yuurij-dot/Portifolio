import UlList from "./ul-list"
import './styles.css'

export default function Header() {
    const barsDiv = document.getElementById('bars')

    const toggleStyleDiv = (e) => {
      if(barsDiv.style.display == 'none'){
        barsDiv.style.display = 'flex'
      }else{
        barsDiv.style.display = 'none'
      }
    }
    return(
        <header className="">

          <nav className="nav-bar pt-6 mb-6">
            
            <div className="flex items-center logo text-primary-light font-bold text-2xl">
              <div className="w-9 h-9 text-center mr-1 bg-primary-light text-white rounded">YJ</div>
              <h1>Portifolio</h1>
            </div>

            <UlList></UlList>

            <div className="flex flex-col mobile-nav items-end">
              <div className="">
                <button onClick={toggleStyleDiv} className="bars-button"><i className="fa-solid fa-bars text-4xl text-primary-light"></i></button>
              </div>

              <div id="bars" className="hidden w-64 p-3 flex-col items-center bg-primary-light">

                <ul className="w-full flex flex-col items-center">
                    <li><a className="text-white hover:text-zinc-700" href="#">Início</a></li>
                    <li className="my-4"><a className="text-white hover:text-zinc-700" href="#habilidades">Habilidades</a></li>
                    <li><a className="text-white hover:text-zinc-700" href="#">Projetos</a></li>
                </ul>

                <div className="download-cv-button">
                  <button className="text-white border-2 border-primary-light p-2 rounded-md font-bold">Download CV</button>
                </div>
              </div>

              

            </div>

            
          </nav>

      </header>
    )
}