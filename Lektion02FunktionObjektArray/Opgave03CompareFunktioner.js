
const string1 = "Emil";
const string2 = "Emil";

function compare(string1, string2){
    if (string1 < string2) {
        return -1;
    } else if (string1 == string2) {
        return 0;
    } else {
        return 1;
    }
}

function compareLength(string1, string2){
    const differenceInLength = string1 - string2
    if(differenceInLength < 0) {
        return -1;
    } else if (differenceInLength > 0) {
        return 1;
    } else {
        return 0;
    }
}

function compareIgnoresCase(string1, string2){
    string1 = string1.toLowerCase;
    string2 = string2.toLowerCase;
    if (string1 < string2) {
        return -1;
    } else if (string1 == string2) {
        return 0;
    } else {
        return 1;
    }
}


console.log(compare(string1,string2));
console.log(compareLength(string1, string2));
console.log(compareIgnoresCase(string1,string2));