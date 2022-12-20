// É BASICAMENTE UM IF QUE SE FAZ EM UMA LINHA SÓ 

let isMember = false
let shipping = isMember? 2:10
console.log(isMember? 'Você é membro!':'Você não é membro!')
console.log(`Frete: r$ ${shipping},00`)