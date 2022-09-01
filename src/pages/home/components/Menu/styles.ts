import styled from "styled-components";

export const MenuContainer = styled.div`
  header {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: bold;
      font-size: 2rem;
  
      margin-bottom: 1rem;
  
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`

export const CoffeeListContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`