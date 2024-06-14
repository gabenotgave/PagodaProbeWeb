const Error = ({title, description}) => {
    return (
        <div> {/*Keep this as a div (don't change to <>)... React has an issue with Bootstrap modules*/}
            <div className="alert alert-dismissible alert-warning">
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                {title ? <h4 className="alert-heading">{title}</h4> : ""}
                <p className="mb-0">{description}</p>
            </div>
        </div>
    )
}

export default Error;