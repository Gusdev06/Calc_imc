import React from "react";
import Cabecalho from "./components/header";
import Classificacao from "./components/Classificacao";
import Resultado from "./components/Resultado";
import Calculo from "./components/Calculo";
import './geral.css';




function App() {
  return (
    <div>
    <div className="container-fluid">
      <Cabecalho  />
      <div className="text">
        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.

  O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.

  Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.
      </div>
    </div>



    <div className="container">
    <Calculo imc="imc" />
    <Classificacao />


    </div>



    </div>
  );
}

export default App;
