export default function Button({className:style ,children : contenido,onClick : funcion, disabled = false}) {

    return(

        <button disabled={disabled} onClick={funcion} className={style}>
            {contenido}
        </button>
    )
}