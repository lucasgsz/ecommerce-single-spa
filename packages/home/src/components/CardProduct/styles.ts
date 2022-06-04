import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;

  background-color: #27272a;
  color: #fff;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  text-align: center;
`;

export const ImageContent = styled.div`
  display: flex;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
`;

export const SpecsContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

export const Price = styled.div``;

export const ActionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ActionButton = styled.button`
  border: none;
  border-radius: 6px;

  background-color: #7d18fd;
  color: #ffffff;

  padding: 5px 20px;

  cursor: pointer;
`;

export const Quantity = styled.div`
  width: 50px;
`;
