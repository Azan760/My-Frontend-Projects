let output = document.getElementById('output');
let btn = document.querySelectorAll('#btn');
let clear = document.getElementById('clear');
let Delete = document.getElementById('delete');
let equal = document.getElementById('equal');


// use foreach loop for btn because querry selctor select all btn so we have list of btn its become array....

btn.forEach(element => {

  // applting event listner to show output input btn values...
  element.addEventListener('click', function (e) {
   
      output.value += element.value;

  })

});

//   clear all button....
clear.addEventListener('click',function(e) {

  //  gives output value to null.
  output.value = '';
})

//  delete button...

Delete.addEventListener('click',function(e) {

  //  these change object into array;
  let Output = Object.values(output.value);

  //  apllying pop method to remove last value in array
  Output.pop();

  //  output.jpin remove comma into array...
  // then put Output value into output.value
  output.value = Output.join("");
})

//  equal to button to show arthmetics result...

equal.addEventListener('click',function(e) {

  let show = output.value;
  // then use eval function to solve arthematics operation..

  output.value = eval(show);

})





