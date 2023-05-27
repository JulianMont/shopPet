import Button from "../Button/Button";

import { Link } from "react-router-dom";

export default function Item({id,nombre,descripcion,precio,imagen}) {

    return(

        <div className="col">
            <div className="card text-center h-100">
                <img src ={imagen} className="card-img-top" alt={descripcion} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text fw-bold">${precio}</p>
                </div>
                <Link className="card-footer" to={`/producto/${id}`}>
                    <Button className={"btn btn-primary"}>Ver Detalles</Button>
                </Link>
            </div>
        </div>
    )
}