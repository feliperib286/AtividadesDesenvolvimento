import styled from "styled-components";

const Ball = styled.div`
  background-color: #3bb33b;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  number: number;
}

export function NumberBall({ number }: Props) {
  return <Ball>{number}</Ball>;
}
