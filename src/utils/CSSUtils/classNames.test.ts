import { describe, expect, it } from 'vitest';
import { classNames } from './classNames';

describe('classNames', () => {
    it('should return an empty string for no input', () => {
        const result = classNames();
        expect(result).toEqual('');
    });

    it('should return the same string for a single input', () => {
        const input = 'class1';
        const result = classNames(input);
        expect(result).toEqual('class1');
    });

    it('should concatenate two inputs with a space', () => {
        const input1 = 'class1';
        const input2 = 'class2';
        const result = classNames(input1, input2);
        expect(result).toEqual('class1 class2');
    });

    it('should concatenate multiple inputs with a space', () => {
        const input1 = 'class1';
        const input2 = 'class2';
        const input3 = 'class3';
        const input4 = '';
        const input5 = 'class5';
        const result = classNames(input1, input2, input3, input4, input5);
        expect(result).toEqual('class1 class2 class3 class5');
    });

    it('should ignore falsy inputs', () => {
        const input1 = 'class1';
        const input2 = '';
        const input3 = 'class3';
        const input4 = null;
        const input5 = undefined;
        const input6 = 'class6';
        const result = classNames(
            input1,
            input2,
            input3,
            input4,
            input5,
            input6,
        );
        expect(result).toEqual('class1 class3 class6');
    });
});
