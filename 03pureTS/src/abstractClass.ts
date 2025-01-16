class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }

    // abstract getSepia(): void
    getReelTime(): number {
        //some complex calculation
        return 8
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter, burst)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const hc = new TakePhoto("Test", "Test", 3)