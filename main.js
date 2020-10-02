'use strict';


{
  let x = [1,2];
  let y = [...x];  // スプリット構文を使えば
  x [0]= 5;
  console.log(x); // [5,2]
  console.log(y); // [1,2] 

}