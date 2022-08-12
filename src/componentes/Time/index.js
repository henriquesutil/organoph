import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {
    return (
        //if se tiver algum adicionado ele pega o valor a direita e exibe
        (props.colaboradores.length > 0) ? <section
                className="time"
                style={{
                    backgroundColor: props.corSecundaria
                }}
            >
                <h3
                    style={{
                        borderColor: props.corPrimaria,
                        color: props.corPrimaria
                    }}
                >
                    {props.nome}
                </h3>
                <div
                    className="colaboradores"
                >
                    {props.colaboradores.map(
                        colaborador => <Colaborador
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corDeFundo={props.corPrimaria}
                        />
                    )}
                </div>
            </section>
            : ''
    )
}

export default Time