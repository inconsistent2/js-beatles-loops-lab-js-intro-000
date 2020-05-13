
var array = []
function theBeatlesPlay (musician, instrument){
i=0
for (i=0, l=musician.length;i<l;i++){
  array.push(`${musician[i]} plays ${instrument[i]}`)
i +=1}
return array
}
// add solution here
