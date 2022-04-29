import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';

export function App() {
    return (
        <Content>
            <p>Quote xpto - Speaker</p>
            <button>Quote No Jutsu</button>
            <img src={narutoImg} alt="Naruto com uma kunai"/>
        </Content>
    );
}