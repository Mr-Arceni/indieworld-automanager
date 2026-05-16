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

When commands are added/deleted or command name changed, run tools/deploy-commands.ts script to update/register slash commands
