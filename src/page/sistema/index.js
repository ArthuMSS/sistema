import React from 'react';
import './index.scss'
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { contarArray, Maior, Media, Menor } from '../../services/funcoes';

export default function SistemaEscola(){
    const[qtdalunos, setQtdAlunos] = useState(0);
    const[alunos, setAlunos] = useState([]);
    const[media, setMedia] = useState(0);
    const[maiorNota, setMaiorNota] = useState(0);
    const[menorNota, setMenorNota] = useState(0);

    const navigate = useNavigate();
    
    function voltarHm(){
        navigate('/')
    }

    function calcAluno(){
        const a = contarArray(qtdalunos);
        setAlunos(a);
    }

    function altAluno(pos, novoValor){
        alunos[pos] = novoValor;
        setAlunos([...alunos]);
    }

    function calc(){
        const a = Media(alunos);
        const b = Maior(alunos);
        const c = Menor(alunos);

        setMedia(a);
        setMaiorNota(b);
        setMenorNota(c);
    }

    return(
        <main className='jak'>

            <section className='jas'>

                <h2>Quantidade de alunos:</h2>
                <input type="number" value={qtdalunos} onChange={e => setQtdAlunos(e.target.value)} placeholder='Digite a quantidade...'/>
                <button onClick={calcAluno} >Confirmar</button>

                {alunos.map((item, pos) =>
                <div>
                    <h2>Aluno {pos+1}:</h2>
                    <input type="text" value={alunos[pos]} onChange={e => altAluno(pos, e.target.value)}/>
                </div>
                )}

                <button onClick={calc}>Calcular</button>

                <h3>
                    Media: {media}
                </h3>

                <h3>
                    Maior: {maiorNota}
                </h3>
                
                <h3>
                    Menor: {menorNota}
                </h3>

                <button onClick={voltarHm}>Voltar</button>

            </section>

        </main>
    )
}