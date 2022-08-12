import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import {useState} from "react";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {

    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2'
        },
        {
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8'
        },
        {
            nome: 'UX e Design',
            corPrimaria: '#DB6EBF',
            corSecundaria: '#FAE9F5'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FFBA05',
            corSecundaria: '#FFF5D9'
        },
        {
            nome: 'Inovação e gestão',
            corPrimaria: '#FFBA29',
            corSecundaria: '#FFEEDF'
        }
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovo = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario
                aoColaboradorCadastrado={colaborador => aoNovo(colaborador)}
                times={times.map(
                    time => time.nome
                )}
            />

            {times.map(time => <Time
                key={time.nome}
                nome={time.nome}
                corPrimaria={time.corPrimaria}
                corSecundaria={time.corSecundaria}
                colaboradores={colaboradores.filter(
                    colaborador => colaborador.time === time.nome
                )}
            />)}

            <Rodape />

        </div>
    );
}

export default App;