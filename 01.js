let links = document.getElementsByTagName("a");
let i=0

let createHandler = (el, index) => {
    return () => {
    el.setAttribute('title', [i])
    };
    }
while (i<links.length){
    links[i].onmouseover = createHandler(links[i], i)
          i++
    }
