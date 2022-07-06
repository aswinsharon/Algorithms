function firstRecurring1(input){

  for(let i=1;i<input.length;i++){
    for(let j=i-1;j>=0;j--){
      if(input[i]===input[j]){
        return input[i];
      }
    }
  }
  return undefined;
}//(O(n^2))---time
 //o(1)--space

function firstRecurring2(input){

  let map={};//space complexity o(n)

  for(let i=0;i<input.length;i++){
    if(map[input[i]]){
      return input[i];
    }
    else{
      map[input[i]]=true; //just keeping the value as true
    }
  }
  return undefined;
}
console.log(firstRecurring2([2,1,1,2,1,2]));
//0(n)--time