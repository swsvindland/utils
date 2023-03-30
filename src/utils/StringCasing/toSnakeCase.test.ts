import { describe, expect, it } from 'vitest';
import { toSnakeCase } from './toSnakeCase';

describe('toSnakeCase', () => {
    it('should return an empty string for an empty input', () => {
        const input = '';
        const result = toSnakeCase(input);
        expect(result).toEqual('');
    });

    it('should return the same string for a single word', () => {
        const input = 'hello';
        const result = toSnakeCase(input);
        expect(result).toEqual('hello');
    });

    it('should convert a string with spaces to snake_case', () => {
        const input = 'hello world';
        const result = toSnakeCase(input);
        expect(result).toEqual('hello_world');
    });

    it('should convert a string with multiple spaces to snake_case', () => {
        const input = 'hello  big   world';
        const result = toSnakeCase(input);
        expect(result).toEqual('hello_big_world');
    });

    it('should handle leading and trailing spaces', () => {
        const input = '  hello world  ';
        const result = toSnakeCase(input);
        expect(result).toEqual('hello_world');
    });

    it('should handle strings with special characters and numbers', () => {
        const input = 'hello-world_123';
        const result = toSnakeCase(input);
        expect(result).toEqual('hello_world_123');
    });
});
