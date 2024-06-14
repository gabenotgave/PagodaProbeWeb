export const insertSpaceBeforeUpperCase = (str) => {
    let newStr = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            newStr += (' ' + str[i]);
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};

export const isNullOrWhitespace = (input) => {
    return !input || !input.trim();
}