const  form1=document.getElementById("form1");
const main=document.querySelector(".main-form-section");
let value=null;
const priority=document.querySelector(".ss_priority");
let obj={

};
let  newData={}
//collecting the function data
function formData(event){
       const formData=new FormData(form1); 
    const data=Object.fromEntries(formData.entries());
    newData={...data,...obj}

  
    if(event.target.dataset.action=="submit-forms"){
        console.log(newData)
    }
    
}


function btnClassRemoval(btns){
    
        btns.forEach((btn)=>{
            btn.classList.remove("high");
            btn.classList.remove("medium");
            btn.classList.remove("low");
            btn.classList.remove("active");
        })

}
function btnClassAdding(btn,btns){
    btn.addEventListener("click",(event)=>{
        btnClassRemoval(btns);
        
        if(btn.dataset.action=="High"){
            
            
            btn.classList.add("high");
            btn.classList.add("active");
        }else if(btn.dataset.action=="Medium"){
        
            btn.classList.add("medium");
            btn.classList.add("active");
            
        }else if(btn.dataset.action=="Low"){
            
            btn.classList.add("low");
            btn.classList.add("active");
        }
        btnValue(btns);
        
        
    })
    
}
function btnValue(btns){
    priority.classList.remove("high");
    priority.classList.remove("medium");
    priority.classList.remove("low");
    btns.forEach((btn)=>{
        
         if(btn.classList.contains("active")){
            value=btn.dataset.action;
            let c_value=value.toLowerCase();
            priority.innerHTML=`   <span class="ss_priority ${c_value}">${value}</span>`
        }
    })//this is the case that we have to determine okay  the last part is to add that particular thing
    //this is the game i need to pratice motherfucker
    //      
    
}

main.addEventListener("click",(event)=>{
    event.preventDefault();
    formData(event);   
})
const btns=document.querySelectorAll(".btn");
btns.forEach((btn)=>{
    
    btnClassAdding(btn,btns);
    
})
const secBtns=document.querySelectorAll(".n_timer_btn");
let timeValue=null;

secBtns.forEach((sBtn)=>{
  sBtn.addEventListener("click",(event)=>{
         secBtns.forEach((sBtn)=>{
        sBtn.classList.remove("select");
        sBtn.classList.remove("active");
    })
        sBtn.classList.add("select");
        sBtn.classList.add("active");
        if(sBtn.classList.contains("active")){
        timevalue=sBtn.dataset.time;
    }

    })   
})


const categories=document.querySelector("#category");
const categoriesDisplay=document.querySelector(".category-display");
const priorityDisplay=document.querySelector(".ss_priority");
categories.addEventListener("input",(event)=>{
    categoriesDisplay.innerText=`${event.target.value}`;
    })

const dropdowns=document.querySelectorAll(".s_dropdown");


dropdowns.forEach((dropdown)=>{
    dropdown.addEventListener("input",(event)=>{
       obj[`${dropdown.name}`]=event.target.value;
       })
})
console.log(priorityDisplay);
console.log(priorityDisplay.innerText);