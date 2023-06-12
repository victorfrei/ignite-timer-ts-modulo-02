import styled from 'styled-components';

export const LayoutContainer = styled.div`

max-width: 72rem;
height: 100%;
margin: 1rem auto;
padding: 2.5rem;

background-color: ${props=>props.theme['gray-800']};
border-radius: 10px;

display: flex;
flex-direction: column;
`