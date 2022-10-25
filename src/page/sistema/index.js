import React from 'react';
import './index.scss'
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Contar from '../../services/contarAluno.js';

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

    function Sistema(){
        
    }

    return(
        <main className='jak'>

            <section className='jas'>

                <h2>Quantidade de alunos:</h2>
                <input type="number"  placeholder='Digite a quantidade...'/>
                <button>Calcular</button>

            </section>

        </main>
    )
}