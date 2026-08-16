        let burgerData = JSON.parse(
            localStorage.getItem("burgerIngredients")
        );


        let orderBurger =
            document.getElementById("orderBurger");

        let orderBurger1 =
            document.getElementById("orderBurger1");

        let orderBurger2 =
            document.getElementById("orderBurger2");

        let orderBurger3 =
            document.getElementById("orderBurger3");

        let noBurger =
            document.getElementById("noBurger");

        if (burgerData) {

            noBurger.style.display = "none";

            for (let i = 0; i < burgerData.lettuce; i++) {

                let lettuce = document.createElement("div");

                lettuce.classList.add("div2");

                orderBurger.appendChild(lettuce);

            }

            for (let i = 0; i < burgerData.bacon; i++) {

                let bacon = document.createElement("div");

                bacon.classList.add("div3");

                orderBurger1.appendChild(bacon);

            }

            for (let i = 0; i < burgerData.cheese; i++) {

                let cheese = document.createElement("div");

                cheese.classList.add("div4");

                orderBurger2.appendChild(cheese);

            }

            for (let i = 0; i < burgerData.meat; i++) {

                let meat = document.createElement("div");

                meat.classList.add("div5");

                orderBurger3.appendChild(meat);

            }

            document.getElementById("orderPrice").textContent =
                "Current Price: $" + burgerData.price;

        }

        document.getElementById("cancelButton")
            .addEventListener("click", function () {

                localStorage.removeItem("burgerIngredients");

                window.location.href = "index.html";

            });

        document.getElementById("continueButton")
            .addEventListener("click", function () {

                window.location.href = "customer-info.html";

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
