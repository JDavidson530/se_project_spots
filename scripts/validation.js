const showInputError = (formEl, inputEl, errorMsg) => {
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = document.querySelector("#" + errorMsgID);
    errorMsgEl.textContent = errorMsg;
    inputEl.classlist.add("modal__input_state_error");
};

const hideInputError = (formEl, inputEl) => {
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = document.querySelector("#" + errorMsgID);
    errorMsgEl.textContent = "";
    inputEl.classlist.remove("modal__input_state_error");
};

const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
        const errorMsgEl = document.querySelector("#" + inputEl.id + "-error");
        errorMsg.textContent = "";
    }
};

const setEventListners = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__button");

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
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

enableValidation();
