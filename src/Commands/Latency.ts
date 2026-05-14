import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import type { ICommand } from "../Interfaces/ICommand.js";

export const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName('latency')
        .setDescription('Shows latency in execution commands, including ping'),

    async execute(interaction: ChatInputCommandInteraction): Promise<void> {
        let nowSys = performance.now();
        await interaction.reply(`Time elapsed: ${Date.now().valueOf() - interaction.createdTimestamp} ms; Includes: ${(performance.now() - nowSys).toPrecision(3)} ms on executing command`);
    }
}