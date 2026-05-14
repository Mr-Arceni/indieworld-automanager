## Development
Install npm packages:
```sh
npm install
```
Create `.env` with:
```text
TOKEN=<Discord Bot Token>
clientId="<Discord Bot Client ID>"
guildId="<Discord Server ID>"
```

When added or deleted or command name changed, run tools/deploy-commands.ts scrypt to update/register slash commands
