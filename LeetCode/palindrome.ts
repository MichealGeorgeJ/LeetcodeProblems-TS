const subStringList:any=[]
const palindromeList:any=[]
let maxlength=0;
let longString=''


function longestPalindrome(s: string): any {

    findSubstringsOfArray(s)
    findLongestPalindrome(subStringList)
    console.log(maxlength)
    console.log(palindromeList)
    console.log(longString)
    
    return longString
};

function findSubstringsOfArray(s:string){


    const length=s.length;
    for(let i=2;i<=length;i++){
        makeSubString(s,i,1)
       
    }
     
}

function makeSubString(s:string,noOfDigits:number,deleteCount:number){
    let start=0
    let end=start+noOfDigits
    let string=[...s]
    while(string.length>1){
        const subString=string.slice(start,end)
        subStringList.push(subString.join(''))
        string.splice(0,deleteCount)
    }
        
    
        
    }
    
function findLongestPalindrome(list:any){

    for(let i=0;i<list.length;i++){
        let temp=list[i].split('').reverse().join('')
        if(list[i]==temp){
            palindromeList.push(list[i])
if(list[i].length>maxlength){
    maxlength=list[i].length
    longString=list[i]
}
        }

    }
    
}






console.log(longestPalindrome('a'))
// console.log(longestPalindrome('cbbd'))