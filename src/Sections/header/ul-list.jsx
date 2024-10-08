export default function UlList({children}){
    return(
        <ul id="ul-list" className="flex items-center">
            <li><a className="text-slate-700 text-base hover:text-primary-light hover:text-lg" href="#">Início</a></li>
            <li><a className="text-slate-700 text-base hover:text-primary-light hover:text-lg" href="#habilidades">Habilidades</a></li>
            <li><a className="text-slate-700 text-base hover:text-primary-light hover:text-lg" href="#">Projetos</a></li>
        </ul>
    )
}