const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'OOOH, Its Neymar Jrs sport!',
  'Oops, I think its the sport of the 5 cups team!',
  'Pele is the greatest in this sport, right? Or is it the CR7?',
  'Its the sport of big stadiums!',
  'The next world cup is in 2022! (This cup belongs to Brazil).',
  'The best football is played in Europe!',
  'Benzema is the best player in the world in 2022!',
  'CR7 is GOAT!',
  'Michael Jordan is GOAT!',
  'Sport where LeBron James is king!',
  'This is where Nikola Jokic is a two-time MVP!',
  'GSW is last NBA CHAMPION!',
  'Barbosa and Splitter are Brazilian champions!',
  'James Harden with his Stap-back!',
  'R.I.P Kobe Bryant, BLACK MAMBA!',
  'Shaq Oneal, better than michael jordan! kkkkkkk',
  'R.I.P BILL RUSSELL!',
  'Chicago Bulls 6x NBA Champion',
  'Sinais apontam que sim.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar numero aletorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
