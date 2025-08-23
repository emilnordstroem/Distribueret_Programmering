const sample = '(){}{{}}'

function isAllParenthesesAndBracketsClosed(text) {
    const stack = [];
    for (const character of text) {
        switch (character) {
            case '(':
            case '[':
            case '{':
                stack.push(character);
                break;
            case ')':
                const lastPushedParen = stack.pop();
                if (lastPushedParen !== '(') {
                    return false;
                }
                break;
            case ']':
                const lastPushedBracket = stack.pop();
                if (lastPushedBracket !== '[') {
                    return false;
                }
                break;
            case '}':
                const lastPushedCurly = stack.pop();
                if (lastPushedCurly !== '{') {
                    return false;
                }
                break;
        }
    }
    return stack.length == 0;
}

console.log(isAllParenthesesAndBracketsClosed(sample));

