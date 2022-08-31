import styled from "styled-components";

export const PresentationCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  height: 554px;
  gap: 3.5rem;

  padding: 6rem 10rem;
`

export const InformationalSpace = styled.div`
  
`

export const FlashyMessageContainer = styled.div`
  margin-bottom: 4.125rem;
`

export const FlashyTitle = styled.h1`
  font-family: 'Ballo 2', sans-serif;
  font-size: 3rem;
  font-weight: 800;

  line-height: 3.875rem;

  margin-bottom: 1rem;

  color: ${(props) => props.theme["base-title"]};
`

export const SubTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.625rem;

  color: ${(props) => props.theme["base-subtitle"]};
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const Benefits = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${(props) => props.theme["base-text"]};
`

export const CoffeeListContainer = styled.div`
  padding: 6rem 10rem;
`

export const CoffeeListTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  font-size: 2rem;

  margin-bottom: 1rem;

  color: ${(props) => props.theme["base-subtitle"]};
`

export const CoffeeList = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

`

export const CoffeeCard = styled.div`
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

    div:nth-child(2) {
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







