export function InfoContact(props) {
    return (
        <div className="info-contact rounded p-3 bg-whitePrimary-light">
            <i className={props.icon}></i>
            <span className="ml-3 text-slate-700 font-bold">{props.information}</span>
        </div>
    )
}