// let smallImages = document.getElementsByClassName("oldImg");
// console.log(smallImages);
// for(let i=0; i<smallImages.length;i++){
//     smallImages[i].src="spiderman_img.png";
//     console.log(`value of img no. ${i} is changed.`);
// }

// let links=document.querySelectorAll(".box a");
// for(let i=0;i< links.length;i++)
// {
//     links[i].style.color="yellow";
// }

// for(link of links){
//     link.style.color="purple";
// }

                             // --------------------------------
                             
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let input=document.querySelector("input");

// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=input.value;

//     let delbtn=document.createElement("button");
//     delbtn.innerText="delete";
//     delbtn.classList.add("delete");

//     item.appendChild(delbtn);
//     ul.appendChild(item);
//     input.value="";
// });

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }


let url="https://catfact.ninja/fact";
fetch(url);