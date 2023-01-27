let liste=[
    {name : "MONCEF",
      age : "13",
        },

      {name : "BAHIJA",
      age : "23",
        },

      {name : "ALA",
      age : "18",
       }
]

function majeurmineur(liste){
   let l=liste.map(function(person){
    if (person.age<18){
        person.status="mineur"
    }
    else{
        person.status="majeur"
    }
    return(person)
    })
   return(l)
    
   }

console.log(majeurmineur(liste))
