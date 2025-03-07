// class TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) { }

//     abstract getSepia(): void
//     getReelTime(): number {
//         //some complex calculation
//         return 8
//     }
// }

// class Instagram extends TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) {
//         super(cameraMode, filter, burst)
//     }

//     getSepia(): void {
//         console.log("Sepia")
//     }
// }

// const hc = new TakePhoto("Test", "Test", 3)

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }

    abstract getSepia(): void;

    getReelTime(): number {
        //some complex calculation
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter, burst);
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const hc = new Instagram("Test", "Test", 3);
hc.getSepia(); // Output: Sepia
console.log(hc.getReelTime()); // Output: 8
