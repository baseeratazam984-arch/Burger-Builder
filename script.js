let lettuceCount = 0;
let baconCount = 0;
let cheesCount = 0;
let meatCount = 0;

let burger = document.getElementById("burger");

let moreLettuce = document.getElementById("morelettuce");
let lessLettuce = document.getElementById("lesslettuce");

let baconContainer = document.getElementById("burger1");

let moreBacon = document.getElementById("morebacon");
let lessBacon = document.getElementById("lessbacon");

let cheesContainer = document.getElementById("burger2");

let morechees = document.getElementById("morechees");
let lesschees = document.getElementById("lesschees");

let meatContainer = document.getElementById("burger3");

let moremeat = document.getElementById("moremeat");
let lessmeat = document.getElementById("lessmeat");

let noingredients = document.getElementById("no_ingredients");

let orderbutton = document.getElementById("orderbutton");

let baseprice = 4;

let lettuceprice = 0.5;
let baconprice = 1;
let cheesprice = 0.5;
let meatprice = 1.5;

let totalprice = baseprice;

let price = document.querySelector("h2");

function updateprice() {

    totalprice =
        baseprice
        + (lettuceprice * lettuceCount)
        + (baconprice * baconCount)
        + (cheesprice * cheesCount)
        + (meatprice * meatCount);

    price.textContent = "Current Price: $" + totalprice.toFixed(2);
}

function updateingredients() {

    let totalingredients =
        lettuceCount +
        baconCount +
        cheesCount +
        meatCount;

    if (totalingredients > 0) {
        noingredients.style.display = "none";
    } else {
        noingredients.style.display = "block";
    }
}

function updateorderbutton() {

    let totalingredients =
        lettuceCount +
        baconCount +
        cheesCount +
        meatCount;

    if (totalingredients > 0) {
        orderbutton.disabled = false;
    } else {
        orderbutton.disabled = true;
    }
}

function saveBurger() {

    let burgerData = {

        lettuce: lettuceCount,
        bacon: baconCount,
        cheese: cheesCount,
        meat: meatCount,
        price: totalprice.toFixed(2)

    };

    localStorage.setItem(
        "burgerIngredients",
        JSON.stringify(burgerData)
    );
}

function updateLessButtons() {

    lessLettuce.disabled = lettuceCount === 0;

    lessBacon.disabled = baconCount === 0;

    lesschees.disabled = cheesCount === 0;

    lessmeat.disabled = meatCount === 0;
}

moreLettuce.addEventListener("click", function () {

    let lettuce = document.createElement("div");

    lettuce.classList.add("div2");

    burger.appendChild(lettuce);

    lettuceCount++;

    updateingredients()
    updateprice();
    updateorderbutton();
    updateLessButtons();
    saveBurger();

});


lessLettuce.addEventListener("click", function () {

    if (lettuceCount > 0) {

        burger.lastElementChild.remove();

        lettuceCount--;

        updateingredients();
        updateprice();
        updateorderbutton();
        updateLessButtons();
        saveBurger();

    }

});

moreBacon.addEventListener("click", function () {

    let bacon = document.createElement("div");

    bacon.classList.add("div3");

    baconContainer.appendChild(bacon);

    baconCount++;

    updateingredients();
    updateprice();
    updateorderbutton();
    updateLessButtons();
    saveBurger();

});


lessBacon.addEventListener("click", function () {

    if (baconCount > 0) {

        baconContainer.lastElementChild.remove();

        baconCount--;

        updateingredients();
        updateprice();
        updateorderbutton();
        updateLessButtons();
        saveBurger();

    }

});

morechees.addEventListener("click", function () {

    let chees = document.createElement("div");

    chees.classList.add("div4");

    cheesContainer.appendChild(chees);

    cheesCount++;

    updateingredients();
    updateprice();
    updateorderbutton();
    updateLessButtons();
    saveBurger();

});


lesschees.addEventListener("click", function () {

    if (cheesCount > 0) {

        cheesContainer.lastElementChild.remove();

        cheesCount--;

        updateingredients();
        updateprice();
        updateorderbutton();
        updateLessButtons();
        saveBurger();

    }

});

moremeat.addEventListener("click", function () {

    let meat = document.createElement("div");

    meat.classList.add("div5");

    meatContainer.appendChild(meat);

    meatCount++;

    updateingredients();
    updateprice();
    updateorderbutton();
    updateLessButtons();
    saveBurger();

});


lessmeat.addEventListener("click", function () {

    if (meatCount > 0) {

        meatContainer.lastElementChild.remove();

        meatCount--;

        updateingredients();
        updateprice();
        updateorderbutton();
        updateLessButtons();
        saveBurger();

    }

});


document.getElementById("burger-builder-log-in-page").onclick =
    function () {

        window.location.href = "index.html";

    };


let login = document.getElementById("log-in");

if (localStorage.getItem("isLoggedIn") === "true") {

    login.textContent = "LOGOUT";

    login.addEventListener("click", function () {

        localStorage.setItem("isLoggedIn", "false");

        location.reload();

    });

} else {

    login.addEventListener("click", function () {

        window.location.href = "login.html";

    });

}


orderbutton.addEventListener("click", function () {

    if (
        lettuceCount +
        baconCount +
        cheesCount +
        meatCount > 0
    ) {

        saveBurger();

        window.location.href = "order.html";

    }

});

updateprice();

updateingredients();

updateorderbutton();

updateLessButtons();