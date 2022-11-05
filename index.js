// I will fetch and change data from the json file as the server and change the static 
// content of the site rather than getting the data from the file system
let apple;

fetch('./server.json')
	.then(response => response.json())
	.then(data => update(data))
	.catch(err => console.error(err));


function update(json){
    console.log(json)
    apple=json
    document.getElementById('heroImg').src=json.images.hero;
    document.getElementsByClassName('photo')[0].style.backgroundImage='url(https://picsum.photos/200)'
    let cards=document.getElementsByClassName('card')
    for (let i = 0; i < cards.length; i++) { //for the project card manipulation
        cards[i].children[0].src=json.images.projects[i]
        cards[i].children[1].children[1].children[0].innerText=json.projects[i][0]   //for project name
        cards[i].children[1].children[1].children[1].innerText=json.projects[i][1]   //for project owner name
        cards[i].children[2].children[0].innerHTML=json.projects[i][2]   //for project owner price
    }
    // Accordion 
    const accordion=document.getElementsByClassName('content')
    for (let i = 0; i < accordion.length; i++) {
        document.getElementsByClassName('content')[i].children[0].innerText= json.accordion[i]
    }
    

}