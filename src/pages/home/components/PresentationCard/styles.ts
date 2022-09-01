import styled from "styled-components";

export const PresentationCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3.5rem;

  padding: 5.875rem 0;
`
export const FlashyMessageContainer = styled.div`
  margin-bottom: 4.125rem;

  h1 {
    font-family: 'Ballo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;

    line-height: 3.875rem;

    margin-bottom: 1rem;

    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
