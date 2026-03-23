const showInputError = (formEl, inputEl, errorMsg) => {
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = formEl.querySelector("#" + errorMsgID);
    errorMsgEl.textContent = errorMsg;
    inputEl.classList.add("modal__input_state_error");
};

const hideInputError = (formEl, inputEl) => {
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = formEl.querySelector("#" + errorMsgID);
    errorMsgEl.textContent = "";
    inputEl.classList.remove("modal__input_state_error");
};

const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
        hideInputError(formEl, inputEl);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonEl) => {
    if (hasInvalidInput(inputList)) {
        buttonEl.disabled = true;
        buttonEl.classList.add("modal__submit-btn_disabled");
    } else {
        buttonEl.disabled = false;
        buttonEl.classList.remove("modal__submit-btn_disabled");
    }
};

const disabledButton = (buttonEl) => {
    buttonEl.disabled = true;
};

const setEventListners = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__submit-btn");

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formEl, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function resetValidation(formEl) {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));

    inputList.forEach((inputEl) => {
        hideInputError(formEl, inputEl);
    });
}

const enableValidation = () => {
    const formList = document.querySelectorAll(".modal__form");
    formList.forEach((formEl) => {
        setEventListners(formEl);
    });
};

function handleEscape(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector(".modal_is-opened");
        closeModal(activePopup);
    }
}

function openModal(modal) {
    modal.classList.add("modal_is-opened");
    document.addEventListener("keyup", handleEscape);
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
    document.removeEventListener("keyup", handleEscape);
}

function resetValidation(formEl) {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));

    inputList.forEach((inputEl) => {
        hideInputError(formEl, inputEl);
    });
}

enableValidation();
