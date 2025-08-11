function FindProxyForURL(url, host) {
    // Домены YouTube и связанные сервисы
    const domains = [
        "*.chatgpt.com"
    ];
    for (const domain of domains) {
        if (shExpMatch(host, domain)) {
            return "SOCKS5 127.0.0.1:9999";
        }
    }
    return "DIRECT";
}