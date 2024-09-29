import { Title } from "../../Components/Title"
import PersonImg from '../../assets/person-img.png'
export function About() {
    return(
        <section className="w-full mb-10 rounded bg-primary-light flex items-center justify-evenly" >
            <div className="w-1/2 flex flex-col items-start">
                <h1 className="font-bold text-5xl text-white mb-3">Sobre Mim</h1>
                <span className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi incidunt quas neque accusamus. Aspernatur necessitatibus officiis omnis eligendi magnam rerum in repellendus fuga nemo. Facere id voluptatibus necessitatibus qui fugit?</span>
            </div>

            <div>
                <img src={PersonImg} alt="" />
            </div>
        </section>
    )
}