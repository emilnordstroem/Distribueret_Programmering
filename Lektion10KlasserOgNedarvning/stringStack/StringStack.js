
class StringStack {

    constructor () {
        this.stackList = []
        this.length = 0
    }

    push (string) {
        this.stackList.push(string);
        this.length++;
    }

    pop () {
        this.length--;
        return this.stackList.pop();
    }

}

const stack = new StringStack;
stack.push("Emil");
console.log(stack.stackList);
console.log(`Length: ${stack.length}`);
console.log(`Pop: ${stack.pop()}`);
console.log(stack.stackList);
console.log(`Length: ${stack.length}`);

