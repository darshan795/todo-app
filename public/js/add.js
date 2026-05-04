const  form1=document.getElementById("form1");
const main=document.querySelector(".main-form-section");
let value=null;
const priority=document.querySelector(".ss_priority");
//collecting the function data
function formData(event){
       const formData=new FormData(form1); 
    const data=Object.fromEntries(formData.entries());

  
    if(event.target.dataset.action=="submit-forms"){
        console.log(data);
        
        console.log(event.target);
    }
}

console.log(main);

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
            console.log("btn was clicked!!");
            btn.classList.add("medium");
            btn.classList.add("active");
            
        }else if(btn.dataset.action=="Low"){
            
            btn.classList.add("low");
            btn.classList.add("active");
        }
        btnValue(btns);
        // console.log(btn);
        
    })
    
}
function btnValue(btns){
    priority.classList.remove("high");
    priority.classList.remove("medium");
    priority.classList.remove("low");
    btns.forEach((btn)=>{
        
         if(btn.classList.contains("active")){
            // console.log(btn.dataset.action);
            value=btn.dataset.action;
            console.log(value);
            console.log("state handling");
            let c_value=value.toLowerCase();
            console.log(c_value);
            // priority.innerText=`${value}`;
            priority.innerHTML=`   <span class="ss_priority ${c_value}">${value}</span>`
            console.log(priority);
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

console.log(priority);
const secBtns=document.querySelectorAll(".n_timer_btn");
console.log(secBtns);
let timeValue=null;

secBtns.forEach((sBtn)=>{
    // console.log(sBtn);
    // console.log(sBtn.dataset.time);
   
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
    
    console.log(timeValue);
    

})

//
//this 