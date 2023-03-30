export const toStartCase = (str: string) => {
    return str
        .split(/[\s_-]+/)
        .filter((word) => word.length > 0)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
