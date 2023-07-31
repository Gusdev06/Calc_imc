const Classificacao = () => {
  return (
    <div>
      <table class="table text-center mt-5">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">IMC</th>
            <th scope="col">CLASSIFICAÇÃO</th>
            <th scope="col">OBESIDADE (GRAU)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>MENOR QUE 18,5</td>
            <td>MAGREZA</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>ENTRE 18,5 E 24,9</td>
            <td>NORMAL</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>ENTRE 25,0 E 29,9</td>
            <td>SOBREPESO</td>
            <td>I</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>ENTRE 30,0 E 39,9</td>
            <td>OBESIDADE</td>
            <td>II</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>MAIOR QUE 40,0</td>
            <td>OBESIDADE GRAVE</td>
            <td>III</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default Classificacao;
