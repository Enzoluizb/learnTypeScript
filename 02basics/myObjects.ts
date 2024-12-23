const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) {

}

let newUser = { name: "hitesh", isPaid: false, email: "h@h.com" }

createUser(newUser)

function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 }
}

export { }