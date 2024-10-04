import { InfoContact } from "../../Components/infoContact"
import { Title } from "../../Components/Title"

import './styles.css'

export function Contact() {
    return(
        <section className="w-full mb-10 flex flex-col items-center ">

            <div className="w-full flex items-center">
                <div className="mt-5 w-1/3 border-b-4 border-slate-700"></div>
                <Title titleName="Informações para contato"/>
                <div className="mt-5 w-1/3 border-b-4 border-slate-700"></div>
            </div>

            <div className="p-6 gap-3 grid grid-cols-2 max-md:flex max-md:flex-col">

                <InfoContact
                    icon="fa-regular fa-envelope text-primary-light"
                    information="yurijesusgoncalves@gmail.com"
                />
                <InfoContact
                    icon="fa-brands fa-whatsapp font-bold text-primary-light"
                    information="(61) 99514-1289"
                />

                <div className="col-span-2 text-center max-md:text-left">
                    <InfoContact
                        icon="fa-solid fa-location-dot font-bold text-primary-light"
                        information="Brasília-DF"
                    />
                </div>
            </div>

            <footer className="w-full flex items-center justify-evenly">

                <div className="w-full mr-3 border-b-4 border-slate-700"></div>

                <div className=" flex items-center justify-center">
                    <a className="text-2xl hover:scale-110" href=""><i className="fa-brands fa-instagram text-slate-700 hover:text-red-500"></i></a>
                    <a className="text-2xl hover:scale-110 mx-4" href=""><i className="fa-brands fa-github text-slate-700 hover:text-blue-500"></i></a>
                    <a className="text-2xl hover:scale-110" href=""><i className="fa-brands fa-whatsapp text-slate-700 hover:text-green-500"></i></a>
                </div>

                <div className="w-full ml-3 border-b-4 border-slate-700"></div>
            </footer>
        </section>
    )
}