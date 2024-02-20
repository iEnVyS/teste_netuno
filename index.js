let tentativasSenha = 0;

function validarCadastro() {
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (!nome || !dataNascimento || !email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    const dataNascimentoDate = new Date(dataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
    const mes = hoje.getMonth() - dataNascimentoDate.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
        idade--;
    }
    if (idade < 18) {
        alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        return false;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, digite novamente.');
        return false;
    }

    alert('Cadastro realizado com sucesso!');
    window.location.href = "login.html";
    
}

function validarLogin() {
    const emailLogin = document.getElementById('emailLogin').value;
    const senhaLogin = document.getElementById('senhaLogin').value;

    if (emailLogin === 'cadastro@email.com' && senhaLogin === '123') {
        alert('Login bem-sucedido. Redirecionando para a tela do jogo.');
        iniciarJogo();
    } else {
        tentativasSenha++;

        if (tentativasSenha === 3) {
            alert('Você excedeu o número máximo de tentativas. O programa será encerrado.');
            window.close();
        } else {
            alert('Email ou senha incorretos. Tente novamente.');
        }
    }
    return false;
}

function iniciarJogo() {

    function distribuirPontosClasse(classe) {
        let pontos = {};
    
        switch (classe) {
            case "Paladino":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 1.20 };
                break;
           
            case "Atirador":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 2.50 };
                break;
    
            case "Guerreiro":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 1.75 };
                break;
    
             case "Bárbaro":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 1.90 };
                break;
    
            case "Arqueiro":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 2.00 };
                break;
    
        }
    
        console.log(`Pontos distribuídos para ${classe}:`, pontos);
    }
    
    
    function distribuirPontosMontaria(montaria) {
        let pontos = {};
    
        switch (montaria) {
            case "Panda":
                pontos = { Velocidade: "3m/s", "Tempo para descanso": "10 minutos" };
                break;
            
          case "Cavalo":
                pontos = { Velocidade: "4m/s", "Tempo para descanso": "5 minutos" };
                break;
    
                case "Dragão":
                pontos = { Velocidade: "6m/s", "Tempo para descanso": "8 minutos" };
                break;
                
                case "Unicórnio":
                pontos = { Velocidade: "5m/s", "Tempo para descanso": "9 minutos" };
                break;
                
                case "Tigre":
                pontos = { Velocidade: "7m/s", "Tempo para descanso": "7 minutos" };
                break;
    
        }
    
        console.log(`Pontos distribuídos para ${montaria}:`, pontos);
    }
    
    
    function exibirInformacoesClasse(classe, ferramenta, caracteristicasFisicas, montaria) {
        console.log("Informações do Avatar:");
        console.log("Classe escolhida:", classe);
        console.log("Ferramenta de batalha:", ferramenta);
        console.log("Características físicas do avatar:", caracteristicasFisicas);
        console.log("Montaria escolhida:", montaria);
    }
    
    function distribuirPontosClasse(classe) {
        let pontos = {};
    
        switch (classe) {
            case "Paladino":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 1.20 };
                break;
           
            case "Atirador":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 2.50 };
                break;
    
            case "Guerreiro":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 1.75 };
                break;
    
            case "Bárbaro":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 1.90 };
                break;
    
            case "Arqueiro":
                pontos = { Vida: 85, Mana: 35, "Velocidade de Ataque": 2.00 };
                break;
        }
    
        return pontos;
    }
    
    function distribuirPontosMontaria(montaria) {
        let pontos = {};
    
        switch (montaria) {
            case "Panda":
                pontos = { Velocidade: "3m/s", "Tempo para descanso": "10 minutos" };
                break;
            
            case "Cavalo":
                pontos = { Velocidade: "4m/s", "Tempo para descanso": "5 minutos" };
                break;
    
            case "Dragão":
                pontos = { Velocidade: "6m/s", "Tempo para descanso": "8 minutos" };
                break;
                
            case "Unicórnio":
                pontos = { Velocidade: "5m/s", "Tempo para descanso": "9 minutos" };
                break;
                
            case "Tigre":
                pontos = { Velocidade: "7m/s", "Tempo para descanso": "7 minutos" };
                break;
        }
    
        return pontos;
    }
    
    let classeEscolhida = prompt("Escolha a classe para jogar:\n1) Paladino \n2) Atirador \n3) Guerreiro \n4) Bárbaro \n5) Arqueiro ");
    let ferramentaBatalha = "";
    let caracteristicasFisicas = prompt("Cadastre as características físicas do seu avatar (Cor de cabelo, de pele e gênero):");
    let montariaEscolhida = prompt("Escolha a montaria:\n1) Panda\n2) Cavalo\n3) Dragão\n4) Unicórnio\n5) Tigre");
    let pontosClasse;
    let pontosMontaria;
    
    switch (classeEscolhida) {
        case "1":
            classeEscolhida = "Paladino";
            ferramentaBatalha = prompt("Escolha a ferramenta de batalha:\n1) Lança\n2) Escudo");
            ferramentaBatalha = ferramentaBatalha === "1" ? "Lança" : "Escudo";
            pontosClasse = distribuirPontosClasse(classeEscolhida);
            break;
        case "2":
            classeEscolhida = "Atirador";
            ferramentaBatalha = prompt("Escolha a ferramenta de batalha:\n1) Arma");
            ferramentaBatalha = "Arma";
            pontosClasse = distribuirPontosClasse(classeEscolhida);
            break;
        case "3":
            classeEscolhida = "Guerreiro";
            ferramentaBatalha = prompt("Escolha a ferramenta de batalha:\n1) Espada e escudo");
            ferramentaBatalha = "Espada e escudo";
            pontosClasse = distribuirPontosClasse(classeEscolhida);
            break;
        case "4":
            classeEscolhida = "Bárbaro";
            ferramentaBatalha = prompt("Escolha a ferramenta de batalha:\n1) Machado\n2) Marreta ");
            ferramentaBatalha = ferramentaBatalha === "1" ? "Machado" : "Marreta";
            pontosClasse = distribuirPontosClasse(classeEscolhida);
            break;
        case "5":
            classeEscolhida = "Arqueiro";
            ferramentaBatalha = prompt("Escolha a ferramenta de batalha:\n1) Arco");
            ferramentaBatalha = "Arco";
            pontosClasse = distribuirPontosClasse(classeEscolhida);
            break;
    }
    
    
    switch (montariaEscolhida) {
        case "1":
            montariaEscolhida = "Panda";
            pontosMontaria = distribuirPontosMontaria(montariaEscolhida);
            break;
    
        case "2":
            montariaEscolhida = "Cavalo";
            pontosMontaria = distribuirPontosMontaria(montariaEscolhida);
            break;
        
        case "3":
            montariaEscolhida = "Dragão";
            pontosMontaria = distribuirPontosMontaria(montariaEscolhida);
            break;
        
        case "4":
            montariaEscolhida = "Unicórnio";
            pontosMontaria = distribuirPontosMontaria(montariaEscolhida);
            break;
    
        case "5":
            montariaEscolhida = "Tigre";
            pontosMontaria = distribuirPontosMontaria(montariaEscolhida);
            break;
    }
    
    exibirInformacoesClasse(classeEscolhida, ferramentaBatalha, caracteristicasFisicas, montariaEscolhida);
    console.log(`Pontos distribuídos para ${classeEscolhida}:`, pontosClasse);
    console.log(`Pontos distribuídos para ${montariaEscolhida}:`, pontosMontaria);
    
    
}





document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault(); 
    validarCadastro(); 
});

document.getElementById('formLogin').addEventListener('submit', function (e) {
    e.preventDefault(); 
    validarLogin(); 
});