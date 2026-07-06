let posts=document.getElementById('posts')
let unames=[]
let titles=[]
let bodies=[]
let Asaved=[]
let IDs=[]
let randomposts=[]
let randomIndex=0;
Asaved.push(unames,titles,bodies)
export function loading(){
  posts.innerText=''
  posts.classList.add('d-flex')
  posts.classList.add('justify-content-center')
  posts.innerHTML=`<div class="d-flex justify-content-center align-items-center frame">
<div class="center">
  <div class="dot-1"></div>
  <div class="dot-2"></div>
  <div class="dot-3"></div>
</div>
</div>`
}
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
export function AddClass(a,b){
  b.forEach(element => {
    a.classList.add(element)
  });
}
function posting(a,b,c){
  let DIV=document.createElement('div')
  AddClass(DIV,['w-75','mx-auto','mt-5','d-flex','flex-column','py-1','user','post'])
  let DIV2=document.createElement('div')
  AddClass(DIV2,['border-bottom','border-2'])
  let prof=document.createElement('h5')
  prof.innerHTML=`<i class="bi bi-person-circle ms-2"></i> ${a}`
  DIV2.append(prof)
  let DIV3=document.createElement('div')
  let tit=document.createElement('h6')
  AddClass(tit,['mt-3','ms-2','username'])
  tit.innerHTML=`${b}`
  DIV3.append(tit)
  let body=document.createElement('p')
  AddClass(body,['mt-3','ms-2'])
  body.innerHTML=`Name: ${c}`
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
    btn2.innerHTML=`<i class="mx-2 bi bi-bookmark-fill"></i>`
    let uName=e.currentTarget.parentElement.previousSibling.previousSibling.children[0].innerText;
    let t=e.currentTarget.parentElement.previousSibling.children[0].innerText;
    let bo=e.currentTarget.parentElement.previousSibling.children[1].innerText;
    unames.push(uName)
    titles.push(t)
    bodies.push(bo)
    let Ssaved=JSON.stringify(Asaved)
    localStorage.setItem('saved',Ssaved)
  })
  btn2.innerHTML=`<i class="mx-2 bi bi-bookmark"></i>`
  DIV4.append(btn1,btn2)
  DIV.append(DIV2,DIV3,DIV4)
  posts.append(DIV)
}
function first(){
  try {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        for (let i=0 ; i<data.length;i++){
          IDs.push(i)
        }
        shuffle(IDs)
        IDs.forEach(element => {
          try {
           fetch(`https://jsonplaceholder.typicode.com/posts?userId=${element}`)
          .then((res2) => res2.json())
          .then((data2) => {
            randomIndex = Math.floor(Math.random() * data2.length);
            posting(data[element].username,data2[randomIndex].title,data2[randomIndex].body)
          
          })
            
          } catch (error) {
              posts.innerHTML=`
              <div class='row'><h3><i class="bi bi-x-square-fill"></i>Sorry!</h3></div>
              <div><p>The server didn't respond.</p></div>`
          }


        });
      })
    
  } catch (error) {
              posts.innerHTML=`
              <div class='row'><h3><i class="bi bi-x-square-fill"></i>Sorry!</h3></div>
              <div><p>The server didn't respond.</p></div>`
  }

}
if (window.location.pathname === '/index.html') {
  first(); 
}
export function users(a,b,c,d,e){
  let Div1=document.createElement('div')
  AddClass(Div1,['w-75','h-25','mx-auto','row','mt-2','user'])
  let Div2=document.createElement('div')
  AddClass(Div2,['col-3','border-end','border-2','d-flex','justify-content-center'])
  let pro=document.createElement('p')
  AddClass(pro,['mt-4','profile'])
  pro.innerHTML=`<i class="bi bi-person-circle"></i>`
  Div2.append(pro)
  let Div3=document.createElement('div')
  AddClass(Div3,['col-9'])
  let h=document.createElement('h5')
  AddClass(h,['mt-3','username'])
  h.innerHTML=`${a}`
  let h2=document.createElement('h6')
  AddClass(h2,['mt-3'])
  h2.innerHTML=`Name: ${b}`
  let more=document.createElement('a')
  AddClass(more,['text-primary','text-decoration-none'])
  more.setAttribute('href','#')
  more.addEventListener('click',() => {
    posts.innerHTML=``;
    let Div1=document.createElement('div')
    AddClass(Div1,['w-75','h-25','mx-auto','row','user'])
    let Div2=document.createElement('div')
    AddClass(Div2,['col-3','border-end','border-2','d-flex','justify-content-center'])
    let pro=document.createElement('p')
    AddClass(pro,['mt-4','profile'])
    pro.innerHTML=`<i class="bi bi-person-circle"></i>`
    Div2.append(pro)
    let Div3=document.createElement('div')
    AddClass(Div3,['col-9'])
    let h=document.createElement('h5')
    AddClass(h,['mt-3','username'])
    h.innerHTML=`${a}`
    let h2=document.createElement('h6')
    AddClass(h2,['mt-3'])
    h2.innerHTML=`Name: ${b}`
    let bio=document.createElement('p')
    bio.innerHTML=`Email: ${c}`
    AddClass(bio,['mt-3'])
    let website=document.createElement('p')
    website.innerHTML=`Website: ${d}`
    let comapny=document.createElement('p')
    comapny.innerHTML=`Company: ${e}`
    Div3.append(h,h2,bio,website,comapny)
    Div1.append(Div2,Div3)
    posts.append(Div1)
  })
  more.innerText='more...'
  Div3.append(h,h2,more)
  Div1.append(Div2,Div3)
  posts.append(Div1)

}
find = (e) => {
  loading()
  setTimeout(() => {
  posts.innerHTML=``
  posts.classList.remove('d-flex')
  let content = e.parentElement.children[0].value.trim();
  if (content){
    const regex=new RegExp(`${content}`,'gi');
    try {
      const userdata= fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
          data.forEach(element => {
            if (regex.test(element.username) || regex.test(element.name)){
                users(element.username,element.name,element.email,element.website,element.company.name)
            }
            try {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${element.id}`)
            .then((res2) => res2.json())
            .then((data) => {
              data.forEach(e => {
                if (regex.test(e.title) || regex.test(e.body)) {
                  posting(element.username,e.title,e.body)
    
                }
              });
            })
            } catch (error) {
              posts.innerHTML=`
              <div class='row'><h3><i class="bi bi-x-square-fill"></i>Sorry!</h3></div>
              <div><p>The server didn't respond.</p></div>`
              
            }

            
        });
      })
    } catch (error) {
              posts.innerHTML=`
              <div class='row'><h3><i class="bi bi-x-square-fill"></i>Sorry!</h3></div>
              <div><p>The server didn't respond.</p></div>`
    }

    }
},6000);
}




