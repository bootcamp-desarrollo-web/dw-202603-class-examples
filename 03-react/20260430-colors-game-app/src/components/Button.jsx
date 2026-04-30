function Button({btnData, onBtnClickCallback}) {
    function onBtnClick(colorHex) {
        // :
        // Código propio del componente que maneja el evento
        // :
        // :

        // Llamada al callback para avisar al componente padre que se ha hecho un click en
        // esta instancia del componente
        console.log('[Button.jsx] onBtnClickCallback is a ... ', typeof onBtnClickCallback)
        onBtnClickCallback(colorHex)
    }

    return (
        // pasar como parametro btnData.color a onBtnClick
        <div className="button" onClick={() => { onBtnClick(btnData.color) }}>
            {btnData.title}
        </div>
    )
}

export default Button
