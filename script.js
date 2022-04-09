function encode(string) {
  let vowelSet = ['a', 'e', 'i', 'o', 'u'];
  let stringArr = string.split('')
  returnArr=[]
  stringArr.map(function(e){
    if (vowelSet.includes(e)){
      if (e == 'a'){
        returnArr.push(1)
      }
      if (e == 'e'){
        returnArr.push(2)
      }
      if (e == 'i'){
        returnArr.push(3)
      }
      if (e == 'o'){
        returnArr.push(4)
      }
      if (e == 'u'){
        returnArr.push(5)
      }
    } else {
      returnArr.push(e)
    }
  })

  return returnArr.join("")
}

function decode(string) {
  let numSet = [1, 2, 3, 4, 5];
  let stringArr = string.split('')
  console.log(stringArr)
  returnArr=[]
  stringArr.map(function(e){
    parseInt(e)
    
    if (numSet.includes(parseInt(e))){
      if (parseInt(e) == 1){
        returnArr.push('a')
      }
      if (parseInt(e)  == 2){
        returnArr.push('e')
      }
      if (parseInt(e)  == 3){
        returnArr.push('i')
      }
      if (parseInt(e)  == 4){
        returnArr.push('o')
      }
      if (parseInt(e)  == 5){
        returnArr.push('u')
      }
    } else {
      returnArr.push(e)
    }
  })
  return returnArr.join("")
}

