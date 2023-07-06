document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));

    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        const button_value = button.innerText;

        if (button_value === "=") {
          try {
            input.value = eval(input.value);
          } catch (error) {
           input.value = "Error";
          }
        } else if (button_value === "AC") {
          input.value = "";
        } else if (button_value === "DEL") {
          input.value = input.value.slice(0, -1);
        } else {
          input.value += button_value;
        }
      });
    });
});