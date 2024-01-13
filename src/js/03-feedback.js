import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const LS_KEY = "feedback-form-state";
const formList = {
    email: "",
    message: "",
};
const currentDate = JSON.parse(localStorage.getItem(LS_KEY)) ?? JSON.stringify(formList);

localStorage.getItem(LS_KEY) ?? localStorage.setItem(LS_KEY, currentDate);

const fillForm = () => {
    const currentStorageDate = localStorage.getItem(LS_KEY);
    if (currentStorageDate) {
        form.elements.message.value = JSON.parse(currentStorageDate).message;
        form.elements.email.value = JSON.parse(currentStorageDate).email;
    };
};

const handleInput = throttle(({ target }) => {
    if (target.name === "email") {
        currentDate.email = target.value;
    } else if (target.name === "message") {
        currentDate.message = target.value;
    };
    localStorage.setItem(LS_KEY, JSON.stringify(currentDate));
}, 500);

const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.removeItem(LS_KEY);
    form.reset();
    console.log(currentDate);
};

fillForm();
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);