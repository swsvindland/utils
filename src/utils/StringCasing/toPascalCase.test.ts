import { describe, it, expect } from 'vitest';
import { toPascalCase } from './toPascalCase';

describe('toPascalCase', () => {
    it('should return an empty string for an empty input', () => {
        const input = '';
        const result = toPascalCase(input);
        expect(result).toEqual('');
    });

    it('should return the same string for a single word', () => {
        const input = 'hello';
        const result = toPascalCase(input);
        expect(result).toEqual('Hello');
    });

    it('should convert a string with spaces to PascalCase', () => {
        const input = 'hello world';
        const result = toPascalCase(input);
        expect(result).toEqual('HelloWorld');
    });

    it('should convert a string with multiple spaces to PascalCase', () => {
        const input = 'hello  big   world';
        const result = toPascalCase(input);
        expect(result).toEqual('HelloBigWorld');
    });

    it('should handle leading and trailing spaces', () => {
        const input = '  hello world  ';
        const result = toPascalCase(input);
        expect(result).toEqual('HelloWorld');
    });

    it('should handle strings with special characters and numbers', () => {
        const input = 'hello-world_123';
        const result = toPascalCase(input);
        expect(result).toEqual('HelloWorld123');
    });
});
