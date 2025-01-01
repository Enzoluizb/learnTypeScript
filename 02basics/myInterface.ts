interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

const hitesh: User = {
    dbId: 22,
    email: "h@h.com",
    userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh", off: 10) => {
        return 32
    }
}

hitesh.email = "h@hc.com"
// hitesh.dbId = 33