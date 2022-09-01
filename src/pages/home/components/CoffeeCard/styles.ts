import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  text-align: center;

  header {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 12px;
    }

    > div {
      margin-bottom: 1rem;
    }

    span {
      padding: 0.25rem 0.5rem;
      width: 3.875rem;
      height: 1.3125rem;

      border-radius: 100px;

      font-size: 0.625rem;
      font-weight: 700;
      line-height: 0.8125rem;

      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};

      & + span {
        margin-left: 0.25rem;
      }
    }
  }

  main {
    margin-bottom: 2.0625rem;

    h3 {
      font-family: 'Ballo 2', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.625rem;
      margin-bottom: 0.5rem;

      color: ${(props) => props.theme["base-subtitle"]};
    }
    
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.125rem;

      color: ${(props) => props.theme["base-label"]};
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;

    div:first-child {
      > span:first-child {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.125rem;

        margin-right: 0.25rem;

        color: ${(props) => props.theme["base-text"]};
      }

      > span:nth-child(2) {
        font-family: 'Ballo 2', sans-serif;
        font-size: 1.25rem;
        font-weight: 800;
        line-height: 1.625rem;

        margin-right: 1.4375rem;

        color: ${(props) => props.theme["base-text"]};
      }
    }

    button {
      border: none;
      background: none;

      cursor: pointer;

      color: ${(props) => props.theme.purple};
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;

      width: 2.375rem;
      height: 2.375rem;

      background: ${(props) => props.theme["purple-dark"]};
      color: ${(props) => props.theme["base-card"]};

      border-radius: 6px;
    }
  }
`