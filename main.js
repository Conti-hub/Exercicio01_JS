
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const numberA = parseFloat(document.getElementById("numberA").value);
  const numberB = parseFloat(document.getElementById("numberB").value);

  const mensagem = document.createElement("p");

  const mensagensAntigas = document.querySelectorAll("p.resultado");
  mensagensAntigas.forEach(el => el.remove());

  mensagem.classList.add("resultado");

  if (numberB > numberA) {
    mensagem.innerText = "✅ Sucesso! B é maior que A.";
    mensagem.style.color = "green";
  } else {
    mensagem.innerText = "❌ Erro: B deve ser maior que A.";
    mensagem.style.color = "red";
  }

  form.appendChild(mensagem);
});