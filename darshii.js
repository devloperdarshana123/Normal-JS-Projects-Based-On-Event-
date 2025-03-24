document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            document.body.style.backgroundColor = this.id;
        });
    });
});
