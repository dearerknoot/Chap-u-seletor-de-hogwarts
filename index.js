const perguntas = [ //array com as perguntas
     'O que você mais valoriza em si mesmo?', 
     'Como você resolve um problema complicado?',
     'Qual dessas palavras te define melhor?',
     'O que te motiva a vencer?',
     'Qual dessas atividades você preferiria?',
     'Como você lidaria com uma injustiça?',
     'Em um grupo de amigos, qual papel você costuma assumir?',
     'Se você pudesse escolher um animal mágico como parceiro, qual seria?']


const alternativas =[
    'a) Coragem | b) Ambição | c) Inteligência | d) Lealdade', //array com as alternativas de cada pergunta
    'a) Enfrento de frente, não fujo! | b) Dou um jeito criativo (mesmo se não for “certinho”) | c) Pesquiso muito até achar a solução | d) Peço ajuda e resolvemos juntos',
    'a) Destemido | b) Astuto | c) Curioso | d) Gentil',
    'a) O desafio e a superação | b) O reconhecimento e poder | c) O aprendizado | d) O trabalho em equipe',
    'a) Esportes radicais ou duelos | b) Jogos estratégicos como xadrez | c) Ler um bom livro de mistério | d) Ajudar amigos em um projeto',
    'a) Me posicionaria na hora! | b) Guardaria para usar como vantagem depois | c) Tentaria entender os dois lados | d) Conversaria com todos até resolver',
    'a) O líder que toma a frente | b) O estrategista que pensa em tudo | c) O conselheiro inteligente e observador | d) O que mantém todos unidos e bem',
    'a) Um hipogrifo corajoso | b) Uma serpente astuta | c) Uma coruja sábia | d) Um texugo leal e protetor']

let pontos = { //objeto com as respectivas pontuações pra cada casa
    griff: 0,
    sons: 0,
    corv: 0,
    luff: 0
}
function mostrarperguntas(){ //função principal que começa no click do botao 'começar'
    let botao = document.getElementById('botaoinicio');
    botao.remove(botao); //essas duas linhas servem apenas para remover o botão da tela
    const caixaSubmit =  document.getElementById('caixa'); //pego a caixa do form do html, nomeio as variáveis assim para eu não me confundir
    let inputElement = document.getElementById('input');
    let alter = document.getElementById('alternativas');
    let caixa_perguntas = document.getElementById('question'); //pego os elementos onde vão as perguntas e as alternativas
    caixa_perguntas.textContent = perguntas[0];
    alter.textContent = alternativas[0]; //coloco incialmente a primeira pergunta e a primeira alterntiva de acordo com o array criado anteriormente
    let npergunta = 0; //crio um contador para o número da pergunta

    function mudarpergunta(npergunta){//função para alterar a pergunta da tela
       caixa_perguntas.textContent = perguntas[npergunta]
       alter.textContent = alternativas[npergunta]
    }

       caixaSubmit.addEventListener('submit',(event)=>{//função que está pegando o submit do form e adicionando um ponto para a respectiva casa
            event.preventDefault();

            let valid = true;
            let resposta = inputElement.value.toLowerCase().trim();
            function pontuar(){//função que adiciona os pontos
                while(valid){//criei essa validação para o programa não pontuar caso o usuário não enviar um valor correto
                    switch(resposta){
                        case 'a':
                            pontos.griff += 1;
                            valid = false;
                        break
            
                        case 'b':
                            pontos.sons += 1;
                            valid = false;
                        break
        
                        case 'c':
                            pontos.corv += 1;
                            valid = false;
                        break
                        
                        case 'd':
                            pontos.luff += 1;
                            valid = false;
                        break
                        default:
                            alert('digite um opção válida');
                            return
                        break
                    }
            }
            }
            pontuar();//a funcção pontuar sendo chamada a cada submit no botao
            console.log(pontos.griff);
            console.log(pontos.sons);
            console.log(pontos.corv);
            console.log(pontos.luff); //consoles para eu ir verificando se o código está funcionando 
            
            npergunta++; //todo submit adiciona mais um para o meu contador
            
            mudarpergunta(npergunta);//contador sendo mudado, inicialmente estava no 1, depois do submit ele passa pra 2 e na função eu coloco como parâmetro para mudar a pergunta

            if(npergunta == 8){ //verificação para o programa só executar essa linha após o contador chegar no 8
                const casas = [
                    'grifinória',
                    'sonserina', //array com os nomes das casas
                    'corvinal',
                    'lufa-lufa'
                ];
                
                let maiorCasa = casas[0];//A casa padrão vai ser a grifinoria
                let porcentG = (pontos.griff * 100) / 8;
                let porcentS = (pontos.sons * 100) / 8;
                let porcentC = (pontos.corv * 100) / 8; //aqui eu faço uma conversão das pontuações para porcentagem de acordo com as 8 perguntas no total
                let porcentL = (pontos.luff * 100) / 8;

                if(pontos.sons > pontos.griff){//verificação que muda a maior casa de acordo com o número de pontos
                    maiorCasa = casas[1];
                }else if(pontos.corv > pontos.griff){ 
                    maiorCasa = casas[2];
                }else if(pontos.luff > pontos.griff){
                    maiorCasa = casas[3];
                }

                alert(`Grifinória: ${porcentG}% Sonserina: ${porcentS}% Corvinal: ${porcentC}% Lufa-Lufa: ${porcentL}%`)//alert mostrando a porcentagem de cada casa

                if(maiorCasa == casas[0]){ //verificação para direcionar o usuário para o site de cada casa
                    window.location.href = 'grifinoria.html';
                }else if(maiorCasa  == casas[1]){
                    window.location.href = 'sonserina.html';
                }else if(maiorCasa == casas[2]){
                    window.location.href = 'corvinal.html';
                }else{
                    window.location.href = 'lufa.html';
                }
            }
            //observação: utilizei IA para me auxiliar nas ideias e conteúdos para os sites de boas vindas de cada casa.
        })
   
        
}

