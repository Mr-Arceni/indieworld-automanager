import {Client, Events, GatewayIntentBits} from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Logged as: ${readyClient.user.tag}`);
});

client.login(process.env.TOKEN);