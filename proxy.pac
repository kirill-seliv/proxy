function FindProxyForURL(url, host) {
    // Домены YouTube и связанные сервисы
    const domains = [
        ".chatgpt.com",
        ".oaistatic.com",
        ".openai.com",
        ".gemini.google.com",
        ".googleapis.com",
        ".apis.google.com",
        ".copilot.microsoft.com",
        ".ecosia.org",
        ".elevenlabs.io",
        ".genspark.ai",
        ".labs.google",
        ".notebooklm.google",
        ".designer.microsoft.com",
        ".grok.com",
        ".x.ai",
        ".featureassets.org",
        ".anthropic.com",
        ".claude.ai"
    ];
    for (const domain of domains) {
        if (shExpMatch(host, `*.${domain}`) || host === domain) {
            return "SOCKS5 127.0.0.1:9999";
        }
    }
    return "DIRECT";
}