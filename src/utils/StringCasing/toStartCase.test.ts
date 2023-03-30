import { describe, it, expect } from 'vitest';
import { toStartCase } from './toStartCase';

describe('toStartCase', () => {
    it('should return an empty string for an empty input', () => {
        const input = '';
        const result = toStartCase(input);
        expect(result).toEqual('');
    });

    it('should return the same string for a single word', () => {
        const input = 'hello';
        const result = toStartCase(input);
        expect(result).toEqual('Hello');
    });

    it('should convert a string with spaces to Start Case', () => {
        const input = 'hello world';
        const result = toStartCase(input);
        expect(result).toEqual('Hello World');
    });

    it('should convert a string with multiple spaces to Start Case', () => {
        const input = 'hello  big   world';
        const result = toStartCase(input);
        expect(result).toEqual('Hello Big World');
    });

    it('should handle leading and trailing spaces', () => {
        const input = '  hello world  ';
        const result = toStartCase(input);
        expect(result).toEqual('Hello World');
    });

    it('should handle strings with special characters and numbers', () => {
        const input = 'hello-world_123';
        const result = toStartCase(input);
        expect(result).toEqual('Hello World 123');
    });
});
