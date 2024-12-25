let score: number | string = 33
score = 44
score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let enzo: User | Admin = {
    name: "enzo",
    id: 334
}

enzo = { username: "ez", id: 334 }

// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`)
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// array

const data: number[] = [1, 2, 3, 4]
const data2: string[] = ["1", "2", "3", "4"]
const data3: any[] = [1, 2, "3", "4", true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"
