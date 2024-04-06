let inputs=document.getElementById("inp")
let text=document.querySelector(".text")
let add=document.getElementById("add")
add.addEventListener("click",( ) => {
    if(inputs.value == "")
    {
        alert("ENTER YOUR TASK NOW")
    }
    else{
        let newele=document.createElement("ul");
        newele.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newele)
        inputs.value="";
        newele.querySelector("i").addEventListener("click",()=>{
            newele.remove()
        })
    }
})
