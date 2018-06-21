function mutation(arr) {
  let string1 = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();
  if (string1 === string2) {
    return true;
  }else{
    let reg = new RegExp("[string2]");
    return reg.test(string1); 
  }
}
  

mutation(["hello", "hey"]);
