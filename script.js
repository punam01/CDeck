window.onload=()=>{
    setTimeout(()=>{
        document.querySelector("body").classList.add("display");
    },4000);
};

document.querySelector('.hamburger-menu').addEventListener("click", 
() =>{
    document.querySelector('.container').classList.toggle("change");
});

document.querySelector('.scroll-btn').addEventListener("click", 
() =>{
    document.querySelector('html').style.scrollBehavior="smooth";
    setTimeout(()=>{
        document.querySelector('html').style.scrollBehavior="unset";
    },1000)
});  


let questPaper=document.querySelector('.quest');
let notes=document.querySelector('.notes');
let paperDiv=document.querySelector('.e-paper');
let notesDiv=document.querySelector('.e-notes');

questPaper.addEventListener('click',()=>{
    if(paperDiv.style.display==="none"){
        notesDiv.style.display="none";
        paperDiv.style.display="block";
    }
    else{
        paperDiv.style.display="none";
    }
})
notes.addEventListener('click',()=>{
    if(notesDiv.style.display==="none"){
        paperDiv.style.display="none";
        notesDiv.style.display="block";
    }
    else{
        notesDiv.style.display="none";
    }
})


let labelBtn=document.querySelectorAll('.head');

function expand(val){
    var x = document.querySelector("."+val);
    if (x.style.display === "none") {
        x.style.display = "flex";
    }
    else {
        console.log(x.style);
        x.style.display = "none";
    }
}





