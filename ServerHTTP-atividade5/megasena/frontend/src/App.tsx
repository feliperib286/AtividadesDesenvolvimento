import { useEffect, useState } from "react";
import { useMega } from "./context/MegaContext";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { SearchInput } from "../src/component/SearchInput";
import { ConcursoCard } from "../src/component/ConcursoCard";

const Container = styled.div`
  max-width: 600px;
  margin: 80px auto;
  padding: 20px;
  text-align: center;
`;

function App() {
  const { concurso, buscarMaisRecente, buscarPorNumero } = useMega();
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.numero) {
      buscarPorNumero(Number(params.numero)).then((erro) => {
        if (erro) {
          setMensagem(erro);
        } else {
          setMensagem('');
        }
      });
    } else {
      buscarMaisRecente();
    }
  }, [params.numero]);

  const handleBuscar = () => {
    if (!numero) return;
    navigate(`/${numero}`);
    setNumero('');
  };

  return (
    <Container>
      <SearchInput
        value={numero}
        onChange={setNumero}
        onSearch={handleBuscar}
      />

      {mensagem && <p style={{ color: 'red' }}>{mensagem}</p>}

      {concurso && <ConcursoCard concurso={concurso} />}
    </Container>
  );
}

export default App;
