var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elSelect = document.querySelector(".form__select")
var elDiv = document.querySelector(".div")
var eur = 11138.18;
var dollar = 10912.30;
var rub = 172.46;

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    var inputValue = elInput.value.trim()

    switch (elSelect.value) {
        case "USD":
        elDiv.value = (inputValue * dollar).toFixed(2);
        break;
        case "RUB":
        elDiv.value = (inputValue * rub).toFixed(2);
        break;
        case "EUR":
        elDiv.value = (inputValue * eur).toFixed(2);
        break;
    }
})
