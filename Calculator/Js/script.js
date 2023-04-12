class Calculator {
  constructor() {
    this.output = document.getElementById('output');
    this.btn = document.querySelectorAll('#btn');
    this.Clear = document.getElementById('clear');
    this.Delete = document.getElementById('delete');
    this.equal = document.getElementById('equal');
  }
  Get() {

    this.btn.forEach(element => {
      element.addEventListener('click', function (e) {
        output.value += element.value;
      })
    })
  }

  clear() {

    this.Clear.addEventListener('click', function (e) {
      output.value = "";
    })
  }

  delete() {
      
    this.Delete.addEventListener('click',function(e) {

      let s = Object.values(output.value);
      console.log(s);
      s.pop();
      output.value = s.join("");
    })

  }

  Equal() {
    this.equal.addEventListener('click',function(e) {

      let result = output.value;
      output.value = eval(result);
    })
    
  }
}

let x = new Calculator();
x.Get();
x.clear();
x.delete();
x.Equal();




