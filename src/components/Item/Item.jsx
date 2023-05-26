import Button from "../Button/Button";

export default function Item({nombre,descripcion,precio,imagen}) {

    return(

        <div className="col">
            <div className="card text-center h-100">
                <img src ={imagen} className="card-img-top" alt={descripcion} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text fw-bold">${precio}</p>
                </div>
                <div className="card-footer">
                    <Button className={"btn btn-primary"}>Ver Detalles</Button>
                </div>
            </div>
        </div>
    )
}