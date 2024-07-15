function makeZigZagPattern(s: string, numRows: number): string {
      
    if(numRows===1){
  return s
}
    const rows=numRows
  const cols=Math.ceil(s.length/2)
const array=Array.from({length:rows},()=>Array.from({length:cols},()=>  ' '))
let left=0
let right=0
let goDown=true
let string=''
array[0][0]=s[0]
for (let i=1;i<s.length;i++){


  if(left===0){
      goDown=true
  }


  if(left===rows-1){
      goDown=false
  }

  function printVerticalDirection(){
      left++
      array[left][right]=s[i]
          
      
   }

  function printCrossDirection(){
      left--
      right++
      array[left][right]=s[i]
  }

  if(goDown){
      printVerticalDirection()
  }


  if(!goDown){
      printCrossDirection()
   }





  

}
 

for (let row of array){
  console.log(row.join(' '))
  string+=row.join('').trim()
}
  string=string.replace(/\s/g, '')
  console.log(string)
  return string

};


console.log(makeZigZagPattern('MichealGeorge',5))