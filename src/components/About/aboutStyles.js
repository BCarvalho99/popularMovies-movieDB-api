import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0;

  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3rem;
    max-width: 50%;
  }

  button {
    background: #7444da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: #fff;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    transition: all 0.3s;
  }
  button:hover {
    background: #6444da;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 14pt;
  }
  span.date {
    font-weight: bold;
  }
`;
