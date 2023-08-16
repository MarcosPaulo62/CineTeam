import { useState } from 'react';
import './styles';
import { MainHome } from './styles';
import marvel from '../../assets/logo-marvel.jpg';
import dc from '../../assets/dc-logo.jpg';

interface HomeProps{
    onToggleTeam: (team: string) => void;
}

export default function Home({ onToggleTeam }: HomeProps){
    const [team, setTeam] = useState<string>('');

    return(
        <MainHome>
            <section className='selecao'>
                <h1>Escolha seu time</h1>
                <div className='escolha'>
                    <img src={marvel} alt="Logo da Marvel" onClick={() => {
                        setTeam('marvel');
                        onToggleTeam('marvel');
                    }} />
                    <img src={dc} alt="Logo da DC" onClick={() => {
                        setTeam('dc');
                        onToggleTeam('dc');
                    }} />
                </div>
            </section>
        </MainHome>
    )
}