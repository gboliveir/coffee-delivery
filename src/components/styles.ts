import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
   
  background: ${(props) => props.theme.background};

  > img {
    height: 2.5rem;
    width: 5.3125rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  
    span:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      gap: 0.25rem;

      font-size: 14px;
      font-weight: 400;

      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      border-radius: 6px;
    }

    span:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      gap: 0.25rem;

      font-size: 14px;
      font-weight: 400;

      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};
      border-radius: 6px;
    }
  }
`
