import './CampoTexto.css'

const Index = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input
                onChange={aoDigitado}
                value={props.valor}
                type="text"
                placeholder={props.placeholder}
                required={props.obrigatorio}
            />
        </div>
    )
}

export default Index