import { Collection } from "discord.js";
import { ICommand } from "../../Interfaces/ICommand.js";

declare module "discord.js" {
    export interface Client {
        commands: Collection<string, ICommand>;
    }
}