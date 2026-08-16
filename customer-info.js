let customerForm =
    document.getElementById("customerForm");

let orderButton =
    document.getElementById("orderButton");

customerForm.addEventListener("input", function () {

    if (customerForm.checkValidity()) {

        orderButton.disabled = false;

    } else {

        orderButton.disabled = true;

    }

});

customerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    if (!customerForm.checkValidity()) {

        return;

    }


    alert("Order Successful!");


    // Burger ka saved data remove

    localStorage.removeItem("burgerIngredients");


    // Burger Builder par wapas

    window.location.href = "index.html";

});

document.getElementById("burgerBuilder")
    .addEventListener("click", function () {

        window.location.href = "index.html";

    });


let loginButton =
    document.getElementById("loginButton");


if (
    localStorage.getItem("isLoggedIn") === "true"
) {

    loginButton.textContent = "LOGOUT";


    loginButton.addEventListener(
        "click",
        function () {

            localStorage.setItem(
                "isLoggedIn",
                "false"
            );

            location.reload();

        }
    );

} else {

    loginButton.addEventListener(
        "click",
        function () {

            window.location.href = "login.html";

        }
    );

}