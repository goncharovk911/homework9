let inp = document.createElement('input')
inp.type = 'input'
inp.id = 'textColor'
document.body.appendChild(inp)
window.onload = () => {
    this.document.getElementById("textColor").onkeyup = function() {
      if (isNaN(this.value)) {
        this.style.color = "red";
      } else {
        this.style.color = "green";
      }
    };
  };