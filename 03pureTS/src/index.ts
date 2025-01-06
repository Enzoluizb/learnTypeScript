class User {
    email: string
    name: string
    readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const asi = new User("a@a.com", "asi")