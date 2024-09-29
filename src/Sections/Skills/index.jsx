import './styles.css'

import { Title } from '../../Components/Title'

export default function Skills(){
    return(
        <section id='habilidades'>
            <Title titleName="Habilidades"/>

            <div className='w-full flex items-center justify-center'>
                <div className="w-full max-w-3xl grid grid-cols-4 ">

                    <div className="div-skills w-40 h-40 rounded bg-whitePrimary-light mx-3 mt-6  p-3 flex items-center justify-center flex-col ">
                            
                        <div className='flex'>
                            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        </div>
                        <span className='mt-3 text-slate-700 font-bold'>HTML CSS</span>
                    </div>

                    <div className="div-skills w-40 h-40 rounded bg-whitePrimary-light mx-3 mt-6  p-3 flex items-center justify-center flex-col ">
                        <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                        <span className='mt-2 text-slate-700 font-bold'>JavaScript</span>
                    </div>

                    <div className="div-skills w-40 h-40 rounded bg-whitePrimary-light mx-3 mt-6  p-3 flex items-center justify-center flex-col ">      
                        <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                        <span className='mt-2 text-slate-700 font-bold'>React JS</span>
                    </div>

                    <div className="div-skills w-40 h-40 rounded bg-whitePrimary-light mx-3 mt-6  p-3 flex items-center justify-center flex-col ">      
                        <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                        <span className='mt-2 text-slate-700 font-bold'>TailWind CSS</span>
                    </div>

                    <div className="div-skills w-40 h-40 rounded bg-whitePrimary-light mx-3 mt-6  p-3 flex items-center justify-center flex-col ">      
                        
                        <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />

                        <span className='mt-2 text-slate-700 font-bold'>Python</span>
                    </div>

                    <div className="div-skills w-40 h-40 rounded bg-whitePrimary-light mx-3 mt-6  p-3 flex items-center justify-center flex-col ">      
                        
                        
                        <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />

                        <span className='mt-2 text-slate-700 font-bold'>PHP</span>
                    </div>

                    <div className="div-skills w-40 h-40 rounded bg-whitePrimary-light mx-3 mt-6  p-3 flex items-center justify-center flex-col ">      
                        
                        
                        <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />

                        <span className='mt-2 text-slate-700 font-bold'>Node JS</span>
                    </div>

                    <div className="div-skills w-40 h-40 rounded bg-whitePrimary-light mx-3 mt-6  p-3 flex items-center justify-center flex-col ">      
                        
                        
                        <img className='w-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />

                        <span className='mt-2 text-slate-700 font-bold'>Node JS</span>
                    </div>

                </div>
            </div>
        </section>
    )
} 