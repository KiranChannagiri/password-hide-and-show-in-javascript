// document.querySelector(".fa-eye-slash").addEventListener("click",()=>
// {
//     document.querySelector(".fa-eye-slash").classList.toggle("fa-eye");
//     if(document.querySelector(".fa-eye-slash").classList.contains("fa-eye"))
//     {
//         inputbox.setAttribute("type","text");
//     }
//     else
//     {
//         inputbox.setAttribute("type","password");
//     }
// });
let inputbox = document.querySelector("#inputbox");

//method 2
document.querySelector(".fa-eye-slash").addEventListener("click",()=>
{
    inputbox.setAttribute("type","text");
    document.querySelector(".fa-eye-slash").style.display="none";
    document.querySelector(".fa-eye").style.display="block";
})

document.querySelector(".fa-eye").addEventListener("click",()=>
{
    inputbox.setAttribute("type","password");
    document.querySelector(".fa-eye").style.display="none";
    document.querySelector(".fa-eye-slash").style.display="block";
})