var plotText = 
"Nous sommes le vendredi 43 décembre 2019. 11 jours avant Noël, \
118 jours avant l'anniversaire d'Alexandre et 149 jours avant \
le jour le plus important de l'année, celui que vous attendez tous, \
l'anniversaire.\0\0\0\0\0\0.\0\0\0\0\0.\0\0\0\0\0\0\0\0\0 \
de.\0\0\0\0\0\0.\0\0\0\0\0.\0\0\0\0\0\0\0\0\0 MOI!\n\
\n\
Il est 9h06, M.Pascal Vincent, 22 ans, talentueux professeur d'informatique, \
aide un jeune\0\0\0 presque prometteur que nous n'appellerons pas \
Noha, pour conserver son anonymat. \
Il se fait aider car il cherche encore à comprendre comment marche un print()...\
\0\0\0\0 si si...\n\
\n\
A l'entrée de la salle, près du bureau, juste avant le tableau, à droite, \
enfin..., entre le tableau et le bureau... enfin...\0\0\0\0\0\0 oui vous \
avez compris. Donc, à cet endroit se trouve le sac du jeune professeur duquel se \
faufile une odeur délicieuse et sucrée...\0\0\0\0 de chouquette ! Ce n'est pas \
n'importe quelle chouquette ! Oh non !\0\0\0\0 C'est celle que notre camarade Louis \
Leborgne est allé chercher sous des pluies diluviennes rien que pour combler l'estomac \
de notre professeur préféré...\n\
\n\
La pendule affiche 9h07, alors que Monsieur Vincent se dirige de nouveau vers \
le tableau, à l'entrée de la salle... près du bureau... à droite... oui bon \
vous save\0e\0e\0e\0e\0e\0e\0e\0e\0e\0e\0z ! \
Il découvre avec effroi que la chouquette sacrée a disparue !!!!!!!!!!!!!!!!!!!!!!!!!!\0\0\0\0\0\
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \
Quelqu'un l'a volée ? Qui ? Qui a fait disparaître cette boule dorée gorgée \
de sucre et de crème qui remplit de bonheur le professeur ? Qui, de Charlotte \
et Alexandre est le meilleur ? (mdr ça on sait déjà). De multiples questions \
envahissent l'excellent professeur de NSI ! \
Vous, vous êtes assis devant votre ordinateur et n'avez rien loupé de la scène, vous savez que si Monsieur Vincent \
ne retrouve pas ce qui lui a été dérobé, vous serez dans l'obligation d'affronter \
un nouveau QCM, et vu votre niveau...\0\0\0  \
Vous voyez déjà votre tombe se creuser toute seule avec un profond désespoir... Mais soudain !! \
Vous vous décidez à réagir et entreprenez de résoudre cette enquête risquée \
de la chouquette volée !";

function letterByLetter(tag, text) {
    tag.innerHTML += text[0];

    var time = 50;

    if (text[0] == ',' || text[0] == '.')
        time = 700;

    if (text.length > 1) {
        window.setTimeout(letterByLetter, time, tag, text.slice(1, text.length));
    } else {
        displayStartButton();
    }
}

letterByLetter(document.getElementById("plot-text"), plotText);

function displayStartButton() {
    document.getElementById("start").style['display'] = 'inline';
}