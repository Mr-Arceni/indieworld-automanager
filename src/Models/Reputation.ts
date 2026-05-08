export class Reputation {
    public Score: number;
    public LastUpdated: Date;

    public AddScore() {
        throw new Error("Method not implemented.");
    }
    public DecreaseScore(value: number) {
        throw new Error("Method not implemented.");
    }

    constructor() {
        this.Score = 10;
        this.LastUpdated = new Date();
    }
}