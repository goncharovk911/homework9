let elm = document.createElement('div')
elm.type = 'div'
elm.id = 'myunique'
elm.innerHTML = 'myunique'
elm.classList.add('sdad', 'www', 'wer', 'wererr')

document.body.appendChild(elm)
elm.onclick = () => {
    const element = document.getElementById("myunique");
    element.innerText += ' (' + element.classList.length + ')'
  };
  
 