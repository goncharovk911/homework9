let newTitle = document.getElementsByTagName("a");
let i=0

let createHandler = (el) => {
    return () => {
           
        el.innerHTML += ' ('+el.href+')' 
        
    };
    }
        while (i < newTitle.length){
        newTitle[i].addEventListener('click', (newTitle) => {
                newTitle.preventDefault()
             }, false)
             
            
         newTitle[i].addEventListener('click', createHandler(newTitle[i]))
       
             i++
        
}