import { createContext, useContext, useState, ReactNode } from "react";

export interface Concurso {
  concurso: number;
  data_do_sorteio: string;
  bola1: number;
  bola2: number;
  bola3: number;
  bola4: number;
  bola5: number;
  bola6: number;
}

interface MegaContextType {
  concurso: Concurso | null;
  buscarMaisRecente: () => Promise<void>;
  buscarPorNumero: (numero: number) => Promise<string | null>;
}

const MegaContext = createContext({} as MegaContextType);

export function MegaProvider({ children }: { children: ReactNode }) {
  const [concurso, setConcurso] = useState<Concurso | null>(null);
  const baseURL = "http://localhost:3001";

  const buscarMaisRecente = async () => {
    try {
      const response = await fetch(`${baseURL}/concurso/mais-recente`);
      if (!response.ok) {
        throw new Error("Erro ao buscar concurso mais recente");
      }
      const data = await response.json();
      setConcurso(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const buscarPorNumero = async (numero: number) => {
    try {
      const response = await fetch(`${baseURL}/concurso/${numero}`);
      if (!response.ok) {
        if (response.status === 404) {
          setConcurso(null);
          return "Concurso não encontrado";
        }
        throw new Error("Erro na busca do concurso");
      }
      const data = await response.json();
      setConcurso(data);
      return null;
    } catch (error) {
      console.error("Erro:", error);
      return "Erro ao buscar o concurso";
    }
  };

  return (
    <MegaContext.Provider value={{ concurso, buscarMaisRecente, buscarPorNumero }}>
      {children}
    </MegaContext.Provider>
  );
}

export const useMega = () => useContext(MegaContext);