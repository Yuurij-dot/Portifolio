import { Title } from "../../Components/Title"

import { Project } from "../../Components/Project"

export function Portifolio(){
    return(
        <section className="my-10"> 
            <Title titleName= "Projetos"/>

            <div className="w-full flex items-center justify-center ">
                <div className="grid grid-cols-3 gap-4">
                    <Project
                        projectHref= "https://age-calculator-bice-seven.vercel.app/"
                        background= "bg-AgeCalculator-Image bg-center bg-cover hover:brightness-95"
                    />
                    <Project
                        projectHref= "https://form-community-of-developers.vercel.app/"
                        background="bg-Form-Image bg-center bg-cover hover:brightness-90"
                    />
                    <Project
                        projectHref = "https://launch-countdown-timer-five.vercel.app/"
                        background="bg-Count-Down-Image bg-center bg-cover hover:brightness-90"
                    />
                </div>
            </div>
        </section>
    )
}