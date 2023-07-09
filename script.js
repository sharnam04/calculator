const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;
        switch (value) {
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch (e) {
                    display.innerText = "ERROR😭";
                }
                break;
            default:
                display.innerText = display.innerText === "0" ? value : display.innerText + value;
                break;
        }
    });
});
