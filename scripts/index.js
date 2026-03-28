const initialCards = [
    {
        name: "Golden Gate Bridge",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
    },
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    {
        name: "Restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },
    {
        name: "outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },
    {
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },
    {
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },
    {
        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
    "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
    "#profile-description-input",
);
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const addCardFormElement = document
    .querySelector("#new-post-modal")
    .querySelector(".modal__form");
const captionInput = addCardFormElement.querySelector("#card-caption-input");
const linkInput = addCardFormElement.querySelector("#profile-image-input");

const previewModal = document.querySelector("#image-modal");
const previewModalCloseBtn = previewModal.querySelector(
    ".modal__close-btn_type_image-preview",
);

previewModalCloseBtn.addEventListener("click", () => {
    closeModal(previewModal);
});

const previewImageEl = previewModal.querySelector(".modal__image");

const previewCaptionEl = previewModal.querySelector(".modal__caption");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
    const cardElement = cardTemplate.content
        .querySelector(".card")
        .cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__title");

    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
    cardTitleEl.textContent = data.name;

    const cardLikeBtnEl = cardElement.querySelector(".card__like-button");
    cardLikeBtnEl.addEventListener("click", () => {
        cardLikeBtnEl.classList.toggle("card__like-button-active");
    });

    const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
    cardDeleteBtnEl.addEventListener("click", () => {
        cardDeleteBtnEl.closest(".card").remove();
    });

    cardImageEl.addEventListener("click", () => {
        previewImageEl.src = data.link;
        previewImageEl.alt = data.name;
        previewCaptionEl.textContent = data.name;
        openModal(previewModal);
    });

    return cardElement;
}

function handleEscape(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".modal_is-opened");
        closeModal(openedPopup);
    }
}

function openModal(modal) {
    modal.classList.add("modal_is-opened");
    document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
    document.removeEventListener("keydown", handleEscape);
}

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    resetValidation(editProfileForm); // here
    openModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
    openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
    closeModal(newPostModal);
});

editProfileModal.addEventListener("click", function (event) {
    if (event.target === editProfileModal) {
        closeModal(editProfileModal);
    }
});

newPostModal.addEventListener("click", function (event) {
    if (event.target === newPostModal) {
        closeModal(newPostModal);
    }
});

previewModal.addEventListener("click", function (event) {
    if (event.target === previewModal) {
        closeModal(previewModal);
    }
});

editProfileModal.addEventListener("click", function (event) {
    if (event.target === editProfileModal) {
        closeModal(editProfileModal);
    }
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const cardElement = getCardElement({
        name: captionInput.value,
        link: linkInput.value,
    });
    cardList.prepend(cardElement);
    addCardFormElement.reset();

    const saveButton = newPostModal.querySelector(".modal__submit-btn");

    saveButton.disabled = true;

    closeModal(newPostModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
    const cardElement = getCardElement(item);
    cardList.prepend(cardElement);
});

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    resetValidation(editProfileForm); // Clean slate every time you open
    openModal(editProfileModal);
});
