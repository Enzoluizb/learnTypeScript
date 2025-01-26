function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
    // return account
}

interface RegularUser {
    name: string;
    email: string;
}

interface PremiumUser {
    name: string;
    email: string;
    isPremium: boolean;
}

function isPremiumAccount(account: RegularUser | PremiumUser): boolean {
    if ("isPremium" in account) {
        return account.isPremium;
    }
    return false;
}

interface WildAnimal {
    species: string;
    habitat: string;
}

interface DomesticatedAnimal {
    species: string;
    habitat: string;
    isDomesticated: boolean;
}

function isDomesticatedAnimal(animal: WildAnimal | DomesticatedAnimal): boolean {
    if ("isDomesticated" in animal) {
        return animal.isDomesticated;
    }
    return false;
}
