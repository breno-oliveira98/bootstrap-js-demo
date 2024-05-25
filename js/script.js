// document.addEventListener("DOMContentLoaded", function() {
//     const inputBox = document.getElementById("inputBox");
//     const output = document.getElementById("output");

//     inputBox.addEventListener("input", function() {
//         const currentText = inputBox.value;
//         output.textContent = "Você digitou: " + currentText;
//     });
// });


document.addEventListener('DOMContentLoaded', () => { //Criando uma lista de eventos que garante que carregue o script antes da pagina carregar
    const inputSearch = document.getElementById('inputSearch'); //cria variavel com o mesmo nome do id do input 'inputSearch' que tem no html 
    const buscarButton = document.getElementById('buscar');     //cria variavel com o mesmo nome do id do botao 'buscar' que tem no html
    const limparButton = document.getElementById('limpar');     //cria variavel com o mesmo nome do id do botao 'limpar' que tem no html
    const tableBody = document.getElementById('userTableBody'); //cria variavel com o mesmo nome do id do 'userTableBody' que é a tabela que tem no html
    const rows = tableBody.getElementsByTagName('tr');          //cria variavel 'rows' que representa 'tr' na tabela que tem no html
  
    inputSearch.addEventListener('input', filterTable);         //pega a variavel 'inputSearch' e adiciona o evento de 'input' para filtrar tabela sempre que o usuario digita
    buscarButton.addEventListener('click', filterTable);        //pega a variavel 'buscarButton' e adiciona o evento de 'click' para filtar a tabela ao clicar
    limparButton.addEventListener('click', clearFilter);        //pega a variavel 'limparButton' e adiciona o evento de 'click' para limpar os campos ao clicar
  
    function filterTable() {
      const searchTerm = inputSearch.value.toLowerCase();
      
      Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName('td');
        let rowContainsSearchTerm = false;
  
        Array.from(cells).forEach(cell => {
          if (cell.textContent.toLowerCase().includes(searchTerm)) {
            rowContainsSearchTerm = true;
          }
        });
  
        if (rowContainsSearchTerm) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }
  
    function clearFilter() {
      inputSearch.value = '';
      Array.from(rows).forEach(row => {
        row.style.display = '';
      });
    }
  });
  