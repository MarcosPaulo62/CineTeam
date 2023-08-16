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
            <section className='selecao' data-testid="principal-section">
                <h1>Escolha seu time</h1>
                <div className='escolha'>
                    <img src={marvel} alt="Logo da Marvel" 
                        onClick={() => {
                            setTeam('marvel');
                            onToggleTeam('marvel');
                        }}
                        data-testid="img-marvel"
                    />
                    <img src={dc} alt="Logo da DC" 
                        onClick={() => {
                            setTeam('dc');
                            onToggleTeam('dc');
                        }} 
                        data-testid="img-dc"
                    />
                </div>
            </section>
        </MainHome>
    )
}