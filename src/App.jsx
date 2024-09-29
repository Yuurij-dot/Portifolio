import Header from "./Sections/header"
import Main from "./Sections/main"
import Skills from "./Sections/Skills"
import { Portifolio } from "./Sections/portifolio"

export default function App(){
  return(
    <div className="container">
      
      <Header></Header>

      <Main></Main>
      
      <Skills></Skills>

      <Portifolio></Portifolio>

    </div>
  )
}