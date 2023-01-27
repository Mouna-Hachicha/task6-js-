let liste=[]
let str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi'

function formattoarray(str1){
   
   let a= str1.split("-")
   let l=a.map(function(user){
      b= user.split("&")
      let dic={}
      dic.firstname=b[0]
      dic.lastname=b[1]
      return (dic)
      })
return(l)   
}

console.log(formattoarray(str1))
