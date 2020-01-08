let elm = document.createElement('div')
elm.type = 'div'
elm.id = 'myunique'
elm.innerHTML = 'myunique'
document.body.appendChild(elm)
elm.onclick = () => {
    let element = document.getElementById("myunique");
    element.classList.add("www");
  };
  