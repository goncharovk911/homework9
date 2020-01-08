
let flag = true;
 imgchange = () =>{
     if (flag){
        let ol = document.getElementById("phantEl");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(4));
        ol.appendChild(li);
     }
    
    else{
        let list = document.getElementsByTagName("ol")[0];
        list.removeChild(list.children[3]);
    }
     
     flag=!flag;
    }
    




