
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

export default function CarritoIcon({className : style}) {

    return(

        <Button className={style}>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span>2</span>
        </Button>

    )

}