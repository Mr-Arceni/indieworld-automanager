import { Infraction } from './Infraction.js';
import { Reputation } from './Reputation.js';

class User {
    public readonly id: string;
    private Reputation: Reputation;
    public LastActiveWeek: Date;
    public ActiveWeeks: number;
    public Infractions: Array<Infraction>;

    public constructor(id: string) {
        this.id = id;
        this.Reputation = new Reputation();
        this.LastActiveWeek = new Date();
        this.ActiveWeeks = 0;
        this.Infractions = new Array<Infraction>();
    }
}