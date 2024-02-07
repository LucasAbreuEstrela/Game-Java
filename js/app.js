function adivinharNumero() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
  
    while (tentativa !== numeroSecreto) {
      const diferenca = Math.abs(tentativa - numeroSecreto);
  
      if (diferenca === 1) {
        alert("Falta pouco!");
      } else if (diferenca > 2) {
        alert("Muito longe!");
      }
  
      tentativa = parseInt(prompt("Tente novamente:"));
    }
  
    alert("Parabéns! Você acertou o número!");
  }
  
  adivinharNumero();