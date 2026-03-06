function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}

const root = document.documentElement;
const colors = [["primaryColor", '--primary-color'], ["secondaryColor", '--secondary-color'], ["textColor", '--text-color'], ["linkColor", '--another-color']];
for (let i=0; i<colors.length; i++) {
    const savedColor = getCookie(colors[i][0]);

    if (savedColor) {
        root.style.setProperty(colors[i][1], savedColor);
    }
}