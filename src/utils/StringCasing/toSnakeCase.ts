export const toSnakeCase = (str: string) => {
    return str
        .split(/[\s_-]+/)
        .filter((word) => word.length > 0)
        .map((word) => word.toLowerCase())
        .join('_');
};
