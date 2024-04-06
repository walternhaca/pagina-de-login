 let participantes = [ 
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 0)
  },
  {
    nome: "Fernanda Silva",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2024, 1, 15, 17, 30),
    dataCheckIn: new Date(2024, 1, 16, 10, 45)
  },
  {
    nome: "Lucas Santos",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 3, 5, 11, 10),
    dataCheckIn: new Date(2024, 3, 6, 9, 0)
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 0, 10, 14, 5),
    dataCheckIn: new Date(2024, 0, 12, 18, 30)
  },
  {
    nome: "Rafael Oliveira",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2024, 3, 2, 20, 0),
    dataCheckIn: null
  },
  {
    nome: "Juliana Costa",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 0, 5, 9, 45),
    dataCheckIn: new Date(2024, 0, 6, 11, 20)
  },
  {
    nome: "Carlos Lima",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 2, 8, 15, 30),
    dataCheckIn: null
  },
  {
    nome: "Camila Oliveira",
    email: "camila@gmail.com",
    dataInscricao: new Date(2024, 1, 20, 12, 0),
    dataCheckIn: new Date(2024, 1, 22, 9, 30)
  },
  {
    nome: "Roberto Silva",
    email: "roberto@gmail.com",
    dataInscricao: new Date(2024, 3, 10, 18, 15),
    dataCheckIn: new Date(2024, 3, 12, 20, 0)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

//Condicional
if(participante.dataCheckIn == null){
  dataCheckIn = `
    <button
    data-email = "${participante.email}"  
    onclick = fazerCheckIn(event)
    >
    Confirmar check-in
    </button>
  `
}
  return `
  <tr>
      <td>
        <Strong>
        ${participante.nome}
        </strong>
        <br>
        <small>
        ${participante.email}
        </small>
      </td>
      <td>
        ${dataInscricao}
      </td>
      <td>
        ${dataCheckIn}
      </td>
  </tr>
  `
}

const atualizarLista = (participante) => {
let output = ""
for(let participante of participantes){
  output = output + criarNovoParticipante(participante)
}
document.querySelector('tbody').innerHTML = output
}
atualizarLista(participantes)


const adcionarParticipante = (event) => {
  //Previne update da pagina
  event.preventDefault()
  //Pega os dados do formulario
  const dadosDoFormulario = new FormData(event.target)

  //Arruma o novo participante
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }
  
  //verificar se o participante existe
  const participanteExiste = participantes.find( (p) =>
    p.email == participante.email
  )

  if(participanteExiste){
    alert('Email ja cadastrado')
    return
  }
  
  //Adciona o participante novo...
  participantes = [participante, ...participantes]
  //Execcuta a lista passando part.s para dentro
  atualizarLista(participantes)

  // limpar o formulario
  event.target.querySelector( '[name= " nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}
const fazerCheckIn = (event) => {
  // confirmar se realmente quer
  const mensagem = 'Tem certeza que deseja fazer o check-in'
  if (confirm(mensagem)== false){
    return 
  }
  // encotrar o partic dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email  
  })
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)
}