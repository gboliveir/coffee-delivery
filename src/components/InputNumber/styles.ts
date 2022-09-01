import styled from "styled-components";


export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-right: 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3125rem;
  text-align: center;

  border: none;

  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: 2.375rem;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  button {
    border: none;
    background: none;

    cursor: pointer;

    color: ${(props) => props.theme.purple};
  }
`
