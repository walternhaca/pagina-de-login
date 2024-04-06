#Html
Cada tag pode receber atributos... Dos quais funcionam para todas tags ou so aquela especifica, como largura, altura, etc.
#CSS
 Cascading StyleSheet*/

 O css funciona na base dos selectores, propriedade e valor
  Exemplo:
  Selector{
    prpriedade: valor;
  }
CORES: rgb: agrupamento dois a dois, de 0-F;

font: peso tamanho/altura 'tipofonte', tipoalternativo;
font: 300 16px/140% 'Roboto',sans-serif;

o css observa todos elementos html como se fosse caixas
padding - preenchimento interno
borda - os limites da caixa
margin - espaco ao redor

Colocamos o css em cascata e ele leva em consideracao o ultimo elemento escrito ou o mais especifico.

borda-no-topo: tamanhoEmPx tipoBorda Cor...(a1)..(1a)..suaviza/opacidade
Exemplo: border-top: 1px solid #ffffff1a;

separacao-borda - border-colapse : collapse;

all: unset; - tira todas as informacoes

Informacao repetitiva, variavel... var(nomevar);
colocamos/criamos em root que significa raiz...

bordas laterais...

fieldset > div - seleciona o primeiro nivel de div, se vc continuar com ">" abrange mais divs

display "apresentaco do conteudo"
  grid: um embaixo do outro
  flex- um ao lado do outro
  
  flax a funcionar- align-itens: center;

gap "espacamento entre eles, pode ser em px"

input-wrapper, sugere-se que a classe é usada para estilizar ou manipular um contêiner que envolve um ou mais elementos de entrada (inputs) em um formulário.

box-sizing: border-box; - garante que a largura da caixa seja a mesma que a do padding

 margin: 0 auto; significa que a margem na vertical eh igual a 0 e na horizontal eh automatica

 SVG eh uma maneira de colocar imagens/icones/logo parecidas com codigo

padding-botton - pading abaixo

#JavaScrip
*variaveis
const - para variaveis que nao mudam o valor
let - permite que a var mude do valor

*Criar constante
  Sintaxe:
  const nomevar = valor;
  exemplo:
  const mensagem = 'Oi, tudo bem?'

*function
  Uma funcao eh um bloco de codigo reutilizavel que faz uma tarefa especifica.
  Sintaxe:
  function nomeDaFuncao () {
  }

  Arrow function 
  Eh uma forma mais simplificada de escrever uma funcao
  Sintaxe:
  function nomeDaFuncao = () => {}

document.queryselector - selector de tags

new Date(ano: number, mes: number, dia?: number, horas?: number, minutos?: number)

${} - serve para troca no objecto
Conteudo dentro das aspas simples e duplas(''/"") nao facilitam quebra de linha diferente do sinal de crases (``)

Objecto
const participante = {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024,2, 22, 19, 20),
  dataCheckIn: new Date(2024,2, 25, 22, 00)
}

*Array
let nomeArray =  [conteudo1,conteudo2];

*Estrutura de repeticao

for( let variavelUnica of variaveisLista){
  //faca alguma coisa
}

Biblioteca de terceiros
day.js - site que contem biblioteca para exibicao de data...

Formularios
      <input> - cria uma caixa que recebe informacao. 
        type : text, email, etc.
      <button>nomeDoBotao</button> - Cria um botao
      Atributos:
        placeholder - Da nome a caixa de informacao 

Submit - envio
event.preventDefault() - nao permite com que o formulario padrao seja enviado

new FormData ( Coloca-se o Alvo(event.target) ) - recebe dados de um formulario
 
Spread? Espalhar 
exemplo:
array1 = [conteudonovo, ...conteudosvelhos]

Em Js tudo eh objecto, o array eh objecto, o texto, etc. Entao eh possivel chamar atraves do ponto '.'

$ - Este simbolo serve para acessar bibliotecas, selecionar elementos, etc.

.find() - serve para procurar algo

data-email, recuperamos este com dataset.email...