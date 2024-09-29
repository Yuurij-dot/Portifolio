import UlList from "./ul-list"
import './styles.css'
export default function Header() {
    return(
        <header className="">
          <nav className="pt-6 mb-6">
            <div className="flex items-center logo text-primary-light font-bold text-2xl">
              <div className="w-9 h-9 text-center mr-1 bg-primary-light text-white rounded">YJ</div>
              <h1>Portifolio</h1>
            </div>

            <UlList></UlList>

            <div>
              <button className="text-slate-700 border-2 border-primary-light p-2 rounded-md font-bold">Download CV</button>
            </div>
          </nav>
      </header>
    )
}