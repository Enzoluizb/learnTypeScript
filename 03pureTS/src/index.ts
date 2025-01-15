// class User {
//     public email: string
//     private name: string
//     private readonly city: string = "Jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//         this.city
//     }
// }

// const asi = new User("h@h.com", "haitech")
// // asi.name

class User {

    private _courseCount = 1

    private readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) {
    }
    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const asi = new User("h@h.com", "haitech")

// asi.deleteToken()