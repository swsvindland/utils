export const toCamelCase = (str: string) => {
    return str
        .split(/[\s_-]+/)
        .filter((word) => word.length > 0)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
};
