import PersonImg from '../../assets/person-img.png'
export function About() {
    return(
        <section className="w-full p-3 mb-10 rounded bg-primary-light flex items-center justify-evenly" >

            <div className="w-1/2 flex flex-col items-start max-md:w-full ">
                <h1 className="font-bold text-5xl text-white mb-3 ">Sobre Mim</h1>
                <span className="text-white">Desenvolvedor Web Front End</span>
                <br />
                <span className="text-white ">Apaixonado por tecnologia dês de cedo, e especializado em criações de websites e aplicações responsivas.</span>
                <span className='text-white '>Estudante de Analise e desenvolvimento de sistemas, em busca de começar a atuar na área.</span>
            </div>

            <div>
                <img src={PersonImg} alt="" />
            </div>
        </section>
    )
}