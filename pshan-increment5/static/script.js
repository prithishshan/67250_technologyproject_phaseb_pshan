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
}

greeting()

function setYear() {
    const footerYear = document.getElementById("copyYear")
    footerYear.innerHTML = `&copy; ${(new Date()).getFullYear()} MonoMuse. All rights reserved.`
}

function setActive() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.id = "selected";
        } else {
            link.id = "";
        }    
    });
}
setActive();

$("#readLess").click(function(){ 
    $("#short-desc").show(); 
    $("#full-desc").hide(); 

  });
  
$("#readMore").click(function(){
    $("#full-desc").show();
    $("#short-desc").hide(); 
});

$("#selectTickets").click(function(){
    $("#checkoutForm").show();
    $("#selectTickets").hide();
});

$("#hamburger").click(function() {
    var hasResponsive = $('nav a').first().hasClass("responsive");
    hasResponsive ? $("nav a").removeClass("responsive") : $("nav a").addClass("responsive");
});

let type = "adult";
let quantity = 1;

function updateTotal() {
    type = $("#type").val();
    quantity = $("#quantity").val();
    quantity = Math.min(quantity, 10);
    $("#quantity").val(quantity);
    let price = 0; 
    if (type == "adult") {
        price = 20;
    } else if (type == "child") {
        price = 10;
    }
    total = price * quantity;
    $("#totalAmount").text(`$${total.toFixed(2)}`);
}

$("#type").change(updateTotal);
$("#quantity").change(updateTotal);


function purchase() {
    updateTotal();
    alert(`Thank you for your purchase of ${quantity} ${type} tickets! We look forward to seeing you at MonoMuse.`);
}

updateTotal();

class SlideShow {
    constructor() {
        this.slides = document.querySelectorAll(".slide");
        this.idx = 0;
        this.length = this.slides.length;
    }
    render() {
        for (var i = 0; i < this.length; i++) {            
            if (i == this.idx) {
                this.slides[i].classList.remove("inactive");
            } else {
                this.slides[i].classList.add("inactive");
            }
        }
    }
    incrSlide() {
        this.idx = (this.idx + 1) % this.length
        this.render();
    }

    decrSlide() {
        this.idx = (this.idx - 1 + this.length) % this.length;
        this.render();
    }
}
const ss = new SlideShow();

function moveSlideFwd() {
    ss.incrSlide();
}

function moveSlideBwd() {
    ss.decrSlide();
}