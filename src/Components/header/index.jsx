import UlList from "./ul-list"
import './styles.css'
export default function Header() {
    return(
        <header className="">
          <nav className="pt-6 mb-6">
            <div className="flex items-center logo text-blue-500 font-bold text-2xl">
              <div className="w-9 h-9 text-center mr-1 bg-blue-500 text-white rounded">YJ</div>
              <h1>Portifolio</h1>
            </div>

            <UlList></UlList>

            <div>
              <button className="border-2 border-blue-500 p-2 rounded-md font-bold">Download CV</button>
            </div>
          </nav>
      </header>
    )
}