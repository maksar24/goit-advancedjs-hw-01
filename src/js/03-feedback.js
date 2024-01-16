import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const LS_KEY = "feedback-form-state";
let currentDate = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};

const fillForm = () => {
    const currentStorageDate = JSON.parse(localStorage.getItem(LS_KEY));
    if (currentStorageDate) {
        form.elements.message.value = currentStorageDate.message || "";
        form.elements.email.value = currentStorageDate.email || "";
    };
};

const handleInput = throttle(({ target }) => {
    currentDate[target.name] = target.value.trim();
    localStorage.setItem(LS_KEY, JSON.stringify(currentDate));
}, 500);

const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.removeItem(LS_KEY);
    form.reset();
    console.log(currentDate);
    currentDate = {};
};

fillForm();
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);