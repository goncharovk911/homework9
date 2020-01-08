let newTitle = document.getElementsByTagName("a");
let i=0, restClick=2

let createHandler = (el) => {
    return () => {
            if(restClick>=0)
        el.innerHTML += ' ('+el.href+')' 
        restClick--
    };
    }
        while (i < newTitle.length){
        newTitle[i].addEventListener('click', (newTitle) => {
                newTitle.preventDefault()
             }, false)
             
            
         newTitle[i].addEventListener('click', createHandler(newTitle[i]))
       
             i++
        
}