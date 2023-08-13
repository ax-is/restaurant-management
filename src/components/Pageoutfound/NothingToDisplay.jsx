import './nothingtodisplay.css'
import { FaBoxOpen } from 'react-icons/fa';

function NothingToDisplay({ text = "It's empty for now" }) {
    return (
        <div className="nothing-display-main">

            <FaBoxOpen className="nothing-display-icon" />
            <h1 className="nothing-display-text">{text}</h1>
        </div>
    )
}

export default NothingToDisplay;
