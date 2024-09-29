export function Title(props) {
    return(
        <div className="title flex justify-center mt-3 p-3">
            <h1 className="text-slate-700 font-bold text-3xl">{props.titleName}</h1>
        </div>
    )
}