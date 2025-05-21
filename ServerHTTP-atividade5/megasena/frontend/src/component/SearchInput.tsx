import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-left: 10px;
  background-color: #3bb33b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #349e34;
  }
`;

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchInput({ value, onChange, onSearch }: Props) {
  return (
    <div>
      <Input
        type="number"
        placeholder="Número do concurso"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onSearch}>Buscar</Button>
    </div>
  );
}
