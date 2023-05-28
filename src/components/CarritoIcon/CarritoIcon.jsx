
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

export default function CarritoIcon({className : style}) {

    return(

        <Button className={`${style} position-relative`}>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
            </span>
        </Button>

    )

}