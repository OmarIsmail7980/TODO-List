function place(){
    const item = document.getElementById("item").value;
    const error = document.getElementById("error");
    const list = document.querySelector(".items");
    
    const itemList = [];
    if(item){
        // let finalItem = item+"</li>";
        
       
        itemList.unshift(item);

        if(itemList){
            for(let i=0; i<itemList.length;i++){
                const listChild = document.createElement("p");
                
    
                listChild.innerHTML = itemList[i];
                
                list.append(listChild);
    
            }
        }
        
    }else{
        error.textContent="Enter a todo Item before submission";
        setTimeout(()=>{
            error.textContent="";
        },5000);
        
    }

    
    document.getElementById("item").value = "";
    const input = document.getElementById("item");
    input.focus();

}

