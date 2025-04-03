class User {
    constructor(email, password) {
        this._email = email;  // Use _email to avoid calling the getter
        this._password = password;
    }

    get email() {
        return this._email.toUpperCase();  // Corrected: Use _email instead of this.email
    }

    set email(value) {
        this._email = value.toUpperCase();  // Corrected: Assign to _email instead of _password
    }
}

const hitesh = new User("hitesh@gmail.com", "6876");
console.log(hitesh.email); // Output: "HITESH@GMAIL.COM"
