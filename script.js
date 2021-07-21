const home = document.getElementById("home");

function nextPage(id){
    home.style.display = "none";
    id.style.display = "block";
}

document.getElementById("name-btn").addEventListener("click",function(){
    nextPage(document.getElementById("random-name"));
})

document.getElementById("activity-btn").addEventListener("click",function(){
    nextPage(document.getElementById("random-activity"));
})

document.getElementById("gen-name").addEventListener("click",function(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const name = data.results[0].name;
        const fullName = `${name.first} ${name.last}`;
        document.getElementById("name-box").innerText = fullName;
    })
})

document.getElementById("gen-activity").addEventListener("click",function(){
    fetch('https://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => {
        document.getElementById("activity-box").innerText = data.activity;
    })
})
