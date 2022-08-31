const CLIENT_ID = "710407168200802384";
const REDIRECT_URI = "http://localhost:8080/";

const AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURI(REDIRECT_URI)}&response_type=token&scope=identify`;

function discordAuthPrompt() {
		window.open(AUTH_URL, "_self");
}
