import {useState} from "react";

const Expandable = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toogleOpen = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }
    return (
        <div>
            <button onClick={toogleOpen} className="showcommentsbutton" >{isOpen ? "Hide" : "Show"} Comments</button>
            {isOpen ? children : null}
        </div>
    )
}

export default Expandable;