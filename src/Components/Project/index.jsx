import './styles.css'

export function Project(props) {    

    const alerta = (e) => {
        return window.open(
            props.projectHref,
            '_blank'
        )
    }
    return(

        <div className={props.background} onClick={alerta}>
            <div className="project-div w-72 h-64 p-10 rounded cursor-pointer " >

            </div>
        </div>
        
    )
}