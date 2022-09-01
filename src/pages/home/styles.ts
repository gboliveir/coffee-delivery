import styled from "styled-components";

export const PresentationCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3.5rem;

  padding: 5.875rem 0;
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
