const sample = '(){}{{}}'

const parenthese = {
    ')': '(',
    ']': '[',
    '}': '{'
}

function isAllParenthesesAndBracketsClosed(text) {
    const stack = [];
    for (const character of text) {
        if (Object.values(parenthese).includes(character)) {
            stack.push(character);
        } else if (parenthese[character] !== stack.pop) {
            return false;
        }
    }
    return stack.length == 0;
}

console.log(isAllParenthesesAndBracketsClosed(sample));