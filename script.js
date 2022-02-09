/*function test () 
{
    document.getElementById("bonjour").innerText = "ceci est un test"; //affiche le texte
}*/

// déclaration des variables 
var computerSign = "";
var userSign = "";

var scoreUser = 0;
var scoreComputer = 0;
var score;

// Fonction qui permet de changer d'image
//les images doivent prendre la place de l'utilisateur
function changeImage(signe)
{
    if(signe == 'pierre')
    {
        console.log('pierre');
        document.getElementById('choice_user').src = 'rock.png';
        userSign = 'pierre';
    }
    else if (signe == 'feuille')
    {
        console.log('feuille');
        document.getElementById('choice_user').src = 'paper.png';
        userSign = 'feuile';
    }
    else {
        console.log('ciseaux');
        document.getElementById('choice_user').src = 'scissors.png';
        userSign = 'ciseaux';
    }
}

// générer un nombre aléatoire  
// dans l'affchage de la page web : Inspecter -> Console -> taper "ordinateur()"
/*function ordinateur(params) {
    var random=Math.round(Math.random()*3);
    console.log(random);
}*/

// Fonction pour le choix aléatoire de l'ordinateur
function getRandomChoiceComputer()
{
    random = Math.round(Math.random()*3);
    if (random == 1) {
        console.log('pierre');
        document.getElementById('choice_computer').src = 'rock.png';
        computerSign = 'pierre';
    }
    else if (random == 2) {
        console.log('feuille');
        document.getElementById('choice_computer').src = 'paper.png';
        computerSign = 'feuille';
    }
    else {
        console.log('ciseaux');
        document.getElementById('choice_computer').src = 'scissors.png';
        computerSign = 'ciseaux';
    }
}

// Incrémenter de un le round
function manche () 
{
    var round = document.getElementById('round').innerHTML
    round++;
    document.getElementById('round').innerHTML = round;
    if (round >= 3)
    {
        document.getElementById('round').innerHTML = "";
    }

    // Allumer les Led en prenant en compte le gagnant et le perdant
    if (round == 1) 
    {
        if (userSign == 'pierre' && computerSign == 'ciseaux' || userSign == 'ciseaux' && computerSign == 'feuille' || userSign == 'feuille' && computerSign == 'pierre')
        {
            document.getElementById('led1_user').style.backgroundColor = 'yellow';
            document.getElementById('led1_ordi').style.backgroundColor = 'red';
            console.log("win");
            scoreUser++;
            console.log(scoreUser, + '' + scoreComputer);
        }
        else if (userSign == 'pierre' && computerSign == 'feuille' || userSign == 'feuille' && computerSign == 'ciseaux' || userSign == 'ciseaux' && computerSign == 'pierre')
        {
            document.getElementById('led1_ordi').style.backgroundColor = 'yellow';
            document.getElementById('led1_user').style.backgroundColor = 'red';
            console.log("lose");
            scoreComputer++;
            console.log(scoreUser, + '' + scoreComputer);
        }
        else 
        {
            document.getElementById('led1_user').style.backgroundColor = 'blue';
            document.getElementById('led1_ordi').style.backgroundColor = 'blue';
            console.log("Egalité");
            console.log(scoreUser, + '' + scoreComputer);
        }
    }

    else if (round == 2)
    {
        if (userSign == 'pierre' && computerSign == 'ciseaux' || userSign == 'ciseaux' && computerSign == 'feuille' || userSign == 'feuille' && computerSign == 'pierre')
        {
            document.getElementById('led2_user').style.backgroundColor = 'yellow';
            document.getElementById('led2_ordi').style.backgroundColor = 'red';
            console.log("win");
            scoreUser++;
            console.log(scoreUser, + '' + scoreComputer);
        }
        else if (userSign == 'pierre' && computerSign == 'feuille' || userSign == 'feuille' && computerSign == 'ciseaux' || userSign == 'ciseaux' && computerSign == 'pierre')
        {
            document.getElementById('led2_ordi').style.backgroundColor = 'yellow';
            document.getElementById('led2_user').style.backgroundColor = 'red';
            console.log("lose");
            scoreComputer++;
            console.log(scoreUser, + '' + scoreComputer);
        }
        else 
        {
            document.getElementById('led2_user').style.backgroundColor = 'blue';
            document.getElementById('led2_ordi').style.backgroundColor = 'blue';
            console.log("Egalité");
            console.log(scoreUser, + '' + scoreComputer);

        }   
    }
    else 
    {
        if (userSign == 'pierre' && computerSign == 'ciseaux' || userSign == 'ciseaux' && computerSign == 'feuille' || userSign == 'feuille' && computerSign == 'pierre')
        {
            document.getElementById('led3_user').style.backgroundColor = 'yellow';
            document.getElementById('led3_ordi').style.backgroundColor = 'red';
            console.log("win");
            scoreUser++;
            console.log(scoreUser, + '' + scoreComputer);
        }
        else if (userSign == 'pierre' && computerSign == 'feuille' || userSign == 'feuille' && computerSign == 'ciseaux' || userSign == 'ciseaux' && computerSign == 'pierre')
        {
            document.getElementById('led3_ordi').style.backgroundColor = 'yellow';
            document.getElementById('led3_user').style.backgroundColor = 'red';
            console.log("lose");
            scoreComputer++;
            console.log(scoreUser, + '' + scoreComputer);
        }
        else 
        {
            document.getElementById('led3_user').style.backgroundColor = 'blue';
            document.getElementById('led3_ordi').style.backgroundColor = 'blue';
            console.log("Egalité");
            console.log(scoreUser, + '' + scoreComputer);
        }
    }
}