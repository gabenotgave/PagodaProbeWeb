import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
    return (
        <ol className="breadcrumb">
        {items.map((item, index) => (
            <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
                {item.link ? <Link to={item.link}>{item.title}</Link> : <span>{item.title}</span>}
            </li>
        ))}
      </ol>
    )
}

export default Breadcrumb;