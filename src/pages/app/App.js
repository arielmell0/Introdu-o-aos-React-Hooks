import { useState, useEffect } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import { jutsoSound } from '../../sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

export function App() {
    const [quoteState, setQuoteState ] = useState({ quote: 'ok', speaker: 'Speaker' });

    const onUpdate = async () => {
        const quote = await getQuote();
        audio.play();

        setQuoteState(quote);
    };

    useEffect(() => {
        onUpdate();
    }, [])

    return (
        <Content>
            <Quotes
                // quote={quoteState.quote} 
                // speaker={quoteState.speaker}   ou
                {...quoteState}
                onUpdate={onUpdate}/>
            <NarutoImg src={narutoImg} alt="Naruto com uma kunai"/>
        </Content>
    );
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NarutoImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`;