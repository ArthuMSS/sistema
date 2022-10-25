import React from 'react';
import './index.scss'
import { useNavigate } from 'react-router-dom';

export default function Home(){

    const navigate = useNavigate();

    function irHm(){
        navigate('/sistema')
    }

    return(
        <main>
            <section className='bn1'>

            <h1 className='hj1'>
                Seja Bem-Vindo!!!!
            </h1>

            <p className='jsa'>
                Ir para <p className='fasf' onClick={irHm}> Sistema </p>
            </p>


            </section>
        </main>
    )
}
