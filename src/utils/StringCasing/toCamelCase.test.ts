import { describe, it, expect } from 'vitest';
import { toCamelCase } from './toCamelCase';

describe('toCamelCase', () => {
    it('should return an empty string for an empty input', () => {
        const input = '';
        const result = toCamelCase(input);
        expect(result).toEqual('');
    });

    it('should return the same string for a single word', () => {
        const input = 'hello';
        const result = toCamelCase(input);
        expect(result).toEqual('hello');
    });

    it('should convert a string with spaces to camelCase', () => {
        const input = 'hello world';
        const result = toCamelCase(input);
        expect(result).toEqual('helloWorld');
    });

    it('should convert a string with multiple spaces to camelCase', () => {
        const input = 'hello  big   world';
        const result = toCamelCase(input);
        expect(result).toEqual('helloBigWorld');
    });

    it('should handle leading and trailing spaces', () => {
        const input = '  hello world  ';
        const result = toCamelCase(input);
        expect(result).toEqual('helloWorld');
    });

    it('should handle strings with special characters and numbers', () => {
        const input = 'hello-world 123';
        const result = toCamelCase(input);
        expect(result).toEqual('helloWorld123');
    });
});
