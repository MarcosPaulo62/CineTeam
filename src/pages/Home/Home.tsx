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
            <section className='descricao'>
                <h2>Marvel vs DC</h2>
                <p>A disputa entre os fãs da Marvel e os da DC sempre foi um tema recorrente no mundo da cultura pop. Essas duas gigantes dos quadrinhos têm alimentado a imaginação de gerações com seus icônicos super-heróis, histórias emocionantes e universos complexos. No entanto, a rivalidade entre os admiradores muitas vezes ultrapassa os limites da mera preferência e se torna um terreno fértil para discussões acaloradas.</p>
                <p>A rivalidade entre Marvel e DC remonta décadas, desde os primórdios das histórias em quadrinhos. Cada uma delas possui seu próprio estilo distintivo. A Marvel é conhecida por suas histórias mais humanas e com personagens que enfrentam desafios cotidianos, além de super-vilões. Por outro lado, a DC costuma se concentrar em temas mitológicos e épicos, explorando as lutas entre o bem e o mal em um nível grandioso.</p>
                <p>Os fãs das duas editoras muitas vezes defendem apaixonadamente suas preferências, alegando que suas histórias favoritas são mais complexas, envolventes ou até mesmo mais moralmente significativas do que as da outra editora. A internet e as redes sociais amplificaram essa rivalidade, proporcionando um palco para debates intermináveis sobre quem possui os melhores personagens, histórias e adaptações cinematográficas ou televisivas.</p>
                <p>No entanto, é importante lembrar que a rivalidade entre Marvel e DC é, em última análise, uma expressão de amor pela cultura nerd e pelos quadrinhos em geral. Ambas as editoras têm contribuído de maneira significativa para a imaginação coletiva, moldando a forma como entendemos a narrativa de super-heróis. Cada uma delas tem suas características únicas, e essa diversidade é o que enriquece o universo dos quadrinhos como um todo.</p>
            </section>
        </MainHome>
    )
}