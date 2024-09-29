import Header from "./Sections/header"
import Main from "./Sections/main"
import Skills from "./Sections/Skills"
import { Portifolio } from "./Sections/portifolio"
import { About } from "./Sections/About"
import { Contact } from "./Sections/contact"
import { Footer } from "./Sections/footer"

export default function App(){
  return(
    <div className="container p-3">
      
      <Header></Header>

      <Main></Main>
      
      <Skills></Skills>

      <Portifolio></Portifolio>

      <About/>

      <Contact/>

      <Footer/>
    </div>
  )
}