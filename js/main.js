var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elSelect = document.querySelector(".form__select")
var elDiv = document.querySelector(".div")
var elRub = document.querySelector(".rub__option")
var elEur = document.querySelector(".eur__option")

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault()

  var inputValue = elInput.value.trim()
})

elSelect.addEventListener("change", function () {
  var selectValue = elSelect.value


})

elInput.addEventListener("input", function () {
  var inputValue = elInput.value.trim()
  var euro = 11138.18;
  var dollar = 10912.30;
  var result = (inputValue * dollar);

  elDiv.textContent = result;

  elRub.addEventListener("change", function () {
    var inputValue = elInput.value.trim()
    var rub = 172.46;
    var result = (inputValue * rub);

    elDiv.textContent = result;
  })
})
