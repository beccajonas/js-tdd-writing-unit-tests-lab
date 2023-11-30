// Your code here
export function isPalindrome(word) {
    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }
    let lowerCaseWord = word.toLowerCase()
    for (let i = 0, j = lowerCaseWord.length-1; i < j; i++, j--) {
        if(lowerCaseWord[i] !== lowerCaseWord[j]) {
            return false
        }
    }
    return true;
}
