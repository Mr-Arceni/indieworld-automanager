import fs from "node:fs";
import path from "node:path";
import * as dotenv from 'dotenv';
import {Client, Collection, Events, GatewayIntentBits, MessageFlags} from 'discord.js';
import { pathToFileURL } from "node:url";

dotenv.config();
const TOKEN = process.env.TOKEN;
if (!TOKEN) {
    throw new Error('TOKEN is missing: not defined in environment variables or in .env file');
}

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,],
});
client.commands = new Collection();

const cmdPath = path.join(import.meta.dirname, 'Commands');
const cmdUrl = pathToFileURL(cmdPath);
const cmdFiles = fs.readdirSync(cmdUrl);

// Searching for command files in ./Commands and adding them to client.commands
for (const file of cmdFiles) {
    const filePath = path.join(cmdPath, file);
    const fileUrl = pathToFileURL(filePath);
    const commandModule = await import(fileUrl.href);
    const command = commandModule.command;

    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
        console.log(`Command loaded: ${command.data.name}`);
    } else {
        console.warn(`The command ${filePath} is missing a required "data" or "execute" property.`)
    }
}

// Creates EventListener for user slash-command Interaction and reply according to commands logic from `./Commands`
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction);

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        console.error(`No commands matching ${interaction.commandName} was found`);
        return;
    }

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Logged as: ${readyClient.user.tag}`);
});

client.login(TOKEN);
