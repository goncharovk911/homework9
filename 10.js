let elm = document.createElement('div')
elm.type = 'div'
elm.id = 'myunique'
elm.innerHTML = 'myunique'
elm.classList = 'www'
document.body.appendChild(elm)
elm.onclick = () => {
    let element = document.getElementById("myunique");
    element.removeAttribute("class");
  };
  
