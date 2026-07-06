let savedArray=JSON.parse(localStorage.getItem('saved')) 
console.log(savedArray)
let posts=document.getElementById('posts')
import { AddClass } from "./script.js"
import { loading } from "./script.js"
function removing(A,v){
  A = A.filter(value => value !== v);
  return A
}
loading()
setTimeout(() => {
  posts.classList.remove('d-flex')
  posts.innerHTML=``
  for(let i=0; i<= savedArray[0].length-1;i++){
      let DIV=document.createElement('div')
      AddClass(DIV,['w-75','mx-auto','mt-5','d-flex','flex-column','py-1','user','post'])
      let DIV2=document.createElement('div')
      AddClass(DIV2,['border-bottom','border-2'])
      let prof=document.createElement('h5')
      prof.innerHTML=`<i class="bi bi-person-circle ms-2"></i> ${savedArray[0][i]}`
      DIV2.append(prof)
      let DIV3=document.createElement('div')
      let tit=document.createElement('h6')
      AddClass(tit,['mt-3','ms-2','username'])
      tit.innerHTML=`${savedArray[1][i]}`
      DIV3.append(tit)
      let body=document.createElement('p')
      AddClass(body,['mt-3','ms-2'])
      body.innerHTML=`Name: ${savedArray[2][i]}`
      DIV3.append(body)
      let DIV4=document.createElement('div')
      AddClass(DIV4,['text-end','ls'])
      let btn1=document.createElement('button')
      btn1.setAttribute('type','button')
      AddClass(btn1,['mb-1','but'])
      btn1.addEventListener('click',(e) => {
        btn1.innerHTML=`<i class="me-2 bi bi-hand-thumbs-up-fill"></i>`
      })
      btn1.innerHTML=`<i class="me-2 bi bi-hand-thumbs-up"></i>`
      let btn2=document.createElement('button')
      btn2.setAttribute('type','button')
      AddClass(btn2,['mb-1','but'])
      btn2.addEventListener('click',(e) => {
        btn2.innerHTML=`<i class="mx-2 bi bi-bookmark"></i>`
        let uName=e.currentTarget.parentElement.previousSibling.previousSibling.children[0].innerText;
        let t=e.currentTarget.parentElement.previousSibling.children[0].innerText;
        let bo=e.currentTarget.parentElement.previousSibling.children[1].innerText;
        savedArray[0]=removing(savedArray[0],uName)
        savedArray[1]=removing(savedArray[1],t)
        savedArray[2]=removing(savedArray[2],bo)
        localStorage.setItem('saved',JSON.stringify(savedArray))
      })
      btn2.innerHTML=`<i class="mx-2 bi bi-bookmark-fill"></i>`
      DIV4.append(btn1,btn2)
      DIV.append(DIV2,DIV3,DIV4)
      posts.append(DIV)
    }
},6000)
