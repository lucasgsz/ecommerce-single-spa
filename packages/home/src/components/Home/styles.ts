import styled from "styled-components";

export const Home = styled.div`
  width: min(1400px, calc(100%));

  margin: 0 auto;
  padding: 1rem;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  margin: 1.3rem 0;

  h3 {
    color: #f4f4f5;

    position: relative;

    &::after {
      content: "";

      position: absolute;
      
      background-color: #7d18fd;

      width: 100%;
      height: 3px;

      bottom: -5px;
      left: 0;
      right: 0;
    }
  }
`;
export const ProductsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
