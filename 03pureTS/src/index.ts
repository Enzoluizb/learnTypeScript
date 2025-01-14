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

    private readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) {
    }
}

const asi = new User("h@h.com", "haitech")
