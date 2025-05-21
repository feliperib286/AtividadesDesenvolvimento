import styled from "styled-components";
import { NumberBall } from "./NumberBall";

const Card = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-top: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const DateText = styled.p`
  color: #555;
`;

interface Props {
  concurso: any;
}

export function ConcursoCard({ concurso }: Props) {
  return (
    <Card>
      <Title>MEGA-SENA - Concurso {concurso.concurso}</Title>

      <NumbersContainer>
        <NumberBall number={concurso.bola1} />
        <NumberBall number={concurso.bola2} />
        <NumberBall number={concurso.bola3} />
        <NumberBall number={concurso.bola4} />
        <NumberBall number={concurso.bola5} />
        <NumberBall number={concurso.bola6} />
      </NumbersContainer>

      <DateText>
        {new Date(concurso.data_do_sorteio).toLocaleDateString('pt-BR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </DateText>
    </Card>
  );
}
