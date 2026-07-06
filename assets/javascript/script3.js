let posts=document.getElementById('posts')
import { AddClass } from "./script.js"
import { users } from "./script.js"
try {
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((data) => {
    data.forEach(element => {
        users(element.username,element.name,element.email,element.website,element.company.name)
    })})
    
} catch (error) {
    posts.innerHTML=`
    <div class='row'><h3><i class="bi bi-x-square-fill"></i>Sorry!</h3></div>
    <div><p>The server didn't respond.</p></div>`
}

