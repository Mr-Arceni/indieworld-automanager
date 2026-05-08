export class Violation {
    public Name: string;
    public Description: string;
    public Weight: number;

    public constructor(name: string, description: string, weight: number) {
        this.Name = name;
        this.Description = description;
        this.Weight = weight;
    }
}