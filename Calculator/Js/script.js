let output = document.getElementById('output');
let btn = document.querySelectorAll('#btn');
let clear = document.getElementById('clear');
let Delete = document.getElementById('delete');
let equal = document.getElementById('equal');


// use foreach loop for btn beacuse btn store all value of input btn so become array....


btn.forEach(element => {


  element.addEventListener('click', function (e) {
   
      output.value += element.value;

  })

});

//   clear all button....
clear.addEventListener('click',function(e) {

  output.value = '';
})

//  delete button...

Delete.addEventListener('click',function(e) {

  //  these change object into array;
  let Output = Object.values(output.value);

  //  apllying pop method to remove last value in array
  Output.pop();

  // then put Output value into output.value
  output.value = Output.join("");
})

//  equal to button to show arthmetics result...

equal.addEventListener('click',function(e) {

  let show = output.value;

  // then use eval function to solve arthematics operation..

  output.value = eval(show);

})





