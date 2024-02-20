class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.inputs = {
      name: this.form.elements["name"],
      email: this.form.elements["email"],
      message: this.form.elements["message"]
    };

    this.errors = {
      name: document.getElementById("nameError"),
      email: document.getElementById("emailError"),
      message: document.getElementById("messageError")
    };

    this.submitButton = document.getElementById("submitButton");
    this.resetButton = document.getElementById("resetButton");

    // Agregar eventos de escucha para los cambios en los campos utilizando forEach
    Object.keys(this.inputs).forEach(key => {
      this.inputs[key].addEventListener("keyup", () => this.validateField(key));
    });

    // Eventos de clic para los botones
    this.submitButton.addEventListener("click", () => this.validateForm());
    this.resetButton.addEventListener("click", () => this.resetForm());
  }

  validateField(fieldName) {
    const validators = {
      name: () => this.validateName(),
      email: () => this.validateEmail(),
      message: () => this.validateMessage()
    };

    validators[fieldName]();
  }

  validateName() {
    const nameRegex = /^[a-zA-Z]+$/;
    this.displayError("name", !nameRegex.test(this.inputs.name.value), "Enter a valid name (only letters).");
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.displayError("email", !emailRegex.test(this.inputs.email.value), "Enter a valid email.");
  }

  validateMessage() {
    this.displayError("message", this.inputs.message.value.trim() === "", "Enter a message.");
  }

  displayError(fieldName, condition, errorMessage) {
    this.errors[fieldName].textContent = condition ? errorMessage : "";
  }

  validateForm() {
    Object.keys(this.inputs).forEach(key => this.validateField(key));

    const isValid = Object.values(this.errors).every(error => error.textContent === "");

    if (isValid) {
      this.form.submit();
    }
  }

  resetForm() {
    this.form.reset();
    Object.values(this.errors).forEach(error => error.textContent = "");
  }
}

// Crear una instancia de FormValidator para el formulario con ID "myForm"
const myFormValidator = new FormValidator("myForm");
