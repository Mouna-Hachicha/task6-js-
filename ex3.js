let liste=[
{name:"sarah" , comment:"j'aime ce poste <3"},
{name:"monya" , comment:"le poste est nul :("},
{name:"carlos" , comment:"salut l'algérie"}
]
let liste1 =[]

function mood(ch){
    let resultat = ch.includes("<3")
    let resultat1 = ch.includes(":(")
    if (resultat) {return ("heureux")}
    else if (resultat1) {return ("triste")}
    else{ return("neutre")} 
}

function mooddetect (liste){
   let l=liste.map(function(user){
    dic={}
    dic.name=user.name
    dic.etat=mood(user.comment)
    return (dic)
   })
return (l)
}

console.log(mooddetect(liste))