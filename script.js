// console.log(1000000);
// console.log("gaming");
// let car="bmw"
// console.log(car);
// console.log("ilya likes "+car);
// let name="jon"
// console.log( name+" likes "+car)
let hp=document.getElementById("hp")
let hpnumber=3
// hp.innerHTML="2"
// hp.innerHTML=1
console.log(hp);
hp.onclick=function(event){
 event.preventDefault()  
 console.log("fortnite is the best game in the world")
 hp.innerHTML="fortnite is the best game in the world"
}
// hp.innerHTML="mishutka"
let russian=document.getElementById("russian")
let okbutton=document.getElementById("okbutton")
let gamebutton=document.getElementById("gamebutton")
let misha=document.getElementById("misha")
let playerinput=document.getElementById("playerinput")
let zagolovok=document.getElementById("zagolovok")
let secret=Math.floor(Math.random()*10)
playerinput.select()
zagolovok.onclick=function(event){
    event.preventDefault()
    console.log("porshe")
    zagolovok.innerHTML="porshe"
    playerinput.select()
}
gamebutton.onclick=function(event){
    // Эта строка нужна для того, чтобы, когда ты кликаешь на кнопку Новая игра, не обновлялась страничка
    event.preventDefault()
    console.log(1000000)
hp.innerHTML="hp:3"
zagolovok.innerHTML="новая игра"
 hpnumber=3
okbutton.disabled=false
    misha.innerHTML="Компьютер загадал число. Ты должен ввести своё число и попробовать угадать число компьютера!"
    russian.innerHTML="The computer thought of a number. You have to enter your number and try to guess the number of the computer!"
    secret=Math.floor(Math.random()*10)
}

russian.onclick=function(event){
    event.preventDefault()
    // if()
}
okbutton.onclick=function(event){
    event.preventDefault()
    if (playerinput.value>secret ){
        console.log("too big")
        misha.innerHTML="too big"
        russian.innerHTML="Слишком большое"
    }
    if (playerinput.value<secret){
        misha.innerHTML="too small"
        russian.innerHTML="слишком маленькое"
    }
    if (secret==playerinput.value){
        console.log("you win!");
        hp.innerHTML="you win!"
        okbutton.disabled=true
    }

    else{
    console.log("no!");
    hpnumber=hpnumber-1
    console.log(hpnumber);
    hp.innerHTML="hp:"+hpnumber
    if (hpnumber==0 ){
         console.log("you lose secret number:");
         hp.innerHTML="you lose secret number:"+secret
        okbutton.disabled=true 
    }
    }
}