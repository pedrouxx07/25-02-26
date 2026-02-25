import { useState } from "react";

export const ResumoFinal = () => {
  const [historico, setHistorico] = useState<string[]>([]);
  const [valor, setValor] = useState(0);

  function registrar(acao: string, novoValor: number) {
    const novoItem = `${acao} -> ${novoValor}`;
    const novo = [...historico, novoItem];

    setHistorico(novo);
  }

  function aumentar() {
    const novoValor = valor + 1;
    setValor(novoValor);
    registrar("aumentou", novoValor);
  }

  function zerar() {
    setValor(0);
    setHistorico([]);
  }

  return (
    <div>
      <h2>Resumo Final</h2>

      <p>
        Valor atual: <strong>{valor}</strong>
      </p>

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={zerar}>Zerar</button>

      <h3>Histórico</h3>
      <ul>
        {historico.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <p>
        Regra final: histórico deve guardar frases do tipo: "aumentou {">"} 1",
        "aumentou {">"} 2"...
      </p>
    </div>
  );
};