const showInputError = (formEl, inputEl, errorMsg) => {
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = document.querySelector("#" + errorMsgID);
    errorMsgEl.textContent = errorMsg;
};

const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    }
};

const setEventListners = (formEl) => {
    const inputList = Array.form(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__button");

    inputList.forEach((inputElement) => {
        inputElement.addEventListner("input", function () {
            checkInputValidity(formEl, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = document.querySelectorAll(".modal__form");
    formList.forEach((formEl) => {
        setEventListners(formEl);
    });
};

enableValidation;
