// Have to be used separately once, after updating list or names of commands in `./Commands`
import fs from 'node:fs';
import path from 'node:path';
import {REST, Routes} from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();
const TOKEN = process.env.TOKEN || '';
const clientId = process.env.clientId || '';
const guildId = process.env.guildId || '';

if (!TOKEN || !clientId || !guildId) {
    throw new Error('TOKEN or clientId or guildId is missing: not defined in environment variables or in .env file');
}

const commands: any[] = [];
const cmdPath = path.join(import.meta.dirname, '../src/Commands');
const cmdFiles = fs.readdirSync(cmdPath);

// Searching for command files in ./Commands and adding them to client.commands
for (const file of cmdFiles) {
    const filePath = path.join(cmdPath, file);
    const commandModule = await import(filePath);
    const command = commandModule.command;

    if ('data' in command && 'execute' in command) {
        commands.push(command.data.toJSON());
        console.log(`Command added: ${command.data.name}`);
    } else {
        console.warn(`The command ${filePath} is missing a required "data" or "execute" property.`)
    }
}

const rest = new REST().setToken(TOKEN);

try {
    console.log(`Starting updating ${commands.length} application commands`);
    const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands});
    console.log(`Finished`);
} catch (error) {
    console.error(error);
}