function FindProxyForURL(url, host) {
    // Домены YouTube и связанные сервисы
    const domains = [
        ".com"
    ];
    for (const domain of domains) {
        if (host.includes(domain)) {
            return "SOCKS5 127.0.0.1:9999";
        }
    }
    return "DIRECT";
}