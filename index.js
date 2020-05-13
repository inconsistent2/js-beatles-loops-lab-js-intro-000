
var array = []
function theBeatlesPlay (musician, instrument){

for (let i=0, l=musician.length;i<l;i++){
  array.push(`${musician[i]} plays ${instrument[i]}`)
}
return array
}
// add solution here

function johnLennonFacts(fact){
var truefact=[]
for(let i=0, l=fact.length;i<l;i++){
  truefact.push(`${fact[i]}!!!`)
}
return truefact
}

function iLoveTheBeatles(num){
  love=[],let i=15-num
  do{
    love.push("I love the Beatles!")
    i++
    while(i<15)
  }
  return love
}