// Your tests here
import {isPalindrome} from "../utils"

describe ("isPalindrome", () => {
    it("checks to see if the word is a palindrome, sends back boolean value)", () => {
        const word = "mom"

        const result = isPalindrome(word)

        expect(result).toBe(true)
    })
    it("checks to see if the word is a palindrome (case-insensitive)", () => {
        const mixedCaseWord = "Madam";
    
        const result = isPalindrome(mixedCaseWord);
    
        expect(result).toBe(true);
    });
    it("throws an error for non-string input", () => {
        const nonStringInput = 123; // Example of a non-string input
    
        expect(() => isPalindrome(nonStringInput)).toThrowError('Input must be a string');
    });
    it("throws an error if string contains non-string element", () => {
        const nonStringElement = "mom!"

        expect(() => isPalindrome(nonStringElement).toThrowError('Input must contain only alphabetic characters'))
    })
})
