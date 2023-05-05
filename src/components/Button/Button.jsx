export default function Button({className:style ,children : contenido,onClick : funcion}) {

    return(

        <button onClick={funcion} className={style}>
            {contenido}
        </button>
    )
}