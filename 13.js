const Elements = function (elm, type, id, innerHTML, classList) {
    let elm = document.createElement(elm)
    this.type = type
    this.id = id
    this.innerHTML = innerHTML
    this.classList.add = classList$
}


/*let elm = document.createElement('div')
elm.type = 'div'
elm.id = 'myunique'
elm.innerHTML = 'myunique'
elm.classList.add('www$', 'www', 'wer', 'wererr')
*/
let wer = new Elements ( 'div', 'div', 'myunique', 'myunique', 'www')
document.body.appendChild(elm)
elm.onclick = () => {
    let tag = document.getElementById("myunique");
    tag.innerHTML = tag.tagName.toLowerCase();
    
  };
  
 