const x = 2;
const y = 10;
console.log(x + y);
{
    const x = "hello";
    const y = "world";
    console.log(x + " " + y);
}

function sumArgs(a,b) {
    console.log(a + b);
}

sumArgs(2, 10);

sumArgs("hi", " everyone");
const C = "my string";
const z = 9;

if (C.length >= z) {
    if (C.length == z) {
        console.log("good job!");
    } else {
        console.log("C");
    }
} else
    console.log("z");

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function checkBanana(list) {
    list.forEach((x) => {
        if (x == "Banana") alert(x);
    });
}

// checkBanana(L1);

// checkBanana(L2);

function greeting() {
    const currtime = new Date()
    const greetEl = document.getElementById("greeting");
    if (greetEl) {
        if (currtime.getHours() < 5) {
            greetEl.innerHTML = "Good Night!"
        } else if (currtime.getHours() < 12) {
            greetEl.innerHTML = "Good Morning!"
        } else if (currtime.getHours() < 18){
            greetEl.innerHTML = "Good Afternoon!"
        } else if (currtime.getHours() < 20){
            greetEl.innerHTML = "Good Evening!"
        } else {
            greetEl.innerHTML = "Good Night!"
        }
    }
    console.log(currtime)
}

greeting()

function setYear() {
    const footerYear = document.getElementById("copyYear")
    footerYear.innerHTML = `&copy; ${(new Date()).getFullYear()} MonoMuse. All rights reserved.`
}