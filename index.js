
function generatePassword(n) {
    if (n < 4) {
        throw new Error("Password length must be at least 4");
    }

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const special = "!@#$%^&*()_+[]{}|;:,.<>?";
    const allChars = uppercase + lowercase + digits + special;

    let password = [];
    password.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    password.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    password.push(digits[Math.floor(Math.random() * digits.length)]);
    password.push(special[Math.floor(Math.random() * special.length)]);

    for (let i = 4; i < n; i++) {
        password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join('');
}

module.exports = generatePassword;