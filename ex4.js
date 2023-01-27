let liste =[
{ name:"sarah" , note: undefined},
{ name:"monya" , note: 7},
{ name:"carlos" , note: 13},
{ name:"fadhel" , note: 18}
]



 function FailedStudent(liste) {
    
    liste = liste.filter(function(étudiant) {
        return étudiant.note !== undefined;
    });
    
    const totaldesNotes = liste.reduce(function(acc, étudiant) {
    return acc + étudiant.note; }, 0);
    const moyenne = totaldesNotes / liste.length;

    liste = liste.map(function(étudiant) {
    if (étudiant.note > moyenne) {
        étudiant.mention = "bien";
    } else {
        étudiant.mention = "passable";
    }
    return étudiant;
    });

liste = liste.map(function(étudiant) {
if (étudiant.note > moyenne) {
    étudiant.mention = "bien";
} else {
    étudiant.mention = "passable";
}
return étudiant;
});

liste = liste.sort(function(x, y) {
    return y.note - x.note;
});
return liste;
}


console.log(FailedStudent(liste));