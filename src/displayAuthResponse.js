function displayAuthResponse() {
    const hash = window.location.hash.slice(1);

    const fragment = new URLSearchParams(hash);
    const [accessToken, tokenType] = [fragment.get("access_token"), fragment.get("token_type")];

    if (!accessToken) return;

    fetch("https://discord.com/api/users/@me", {
        headers: {
            authorization: `${tokenType} ${accessToken}`
        }
    })
        .then(result => result.json())
        .then(response => {
            const textarea = document.getElementById("discordAuthResponse");
            textarea.textContent = JSON.stringify(response, null, 4);
        })
        .catch(console.error);
}