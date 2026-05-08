import type {Violation} from "./Violation.js";

export class Infraction {
    public ViolationType: Violation;
    public CreatedAt: Date;

    public constructor(ViolationType: Violation) {
        this.ViolationType = ViolationType;
        this.CreatedAt = new Date();
    }
}