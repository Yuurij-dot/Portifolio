import './styles.css'

import HtmlCSS from '../../assets/html-css-icon.png'

export default function Skills(){
    return(
        <section>
            <div className="title flex justify-center mt-3 p-3">
                <h1 className="text-slate-700 font-bold text-3xl">Habilidades</h1>
            </div>

            <div className="w-full flex justify-center flex-col">

                <div className='w-full flex justify-center'>
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
                </div>

                <div className='w-full flex justify-center'>

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