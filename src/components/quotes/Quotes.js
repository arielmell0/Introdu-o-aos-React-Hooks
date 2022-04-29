import styled from 'styled-components';

export const Quotes = ({ quote, speaker }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker> - {speaker}</Speaker>
            <button>Quote No Jutsu</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;
`;