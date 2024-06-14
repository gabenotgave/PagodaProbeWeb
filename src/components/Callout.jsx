export const Callout = ({ text, type = "info" }) => {
    return (
        (type === "info") ? (
            <div className="bd-callout bd-callout-info">{text}</div>
        ) : (type === "warning") ? (
            <div className="bd-callout bd-callout-warning">{text}</div>
        ) : (
            <div className="bd-callout">{text}</div>
        )
    )
}

export default Callout;