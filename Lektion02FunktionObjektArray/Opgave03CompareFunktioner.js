
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
    return compare(string1.length, string2.length);
}

function compareIgnoresCase(string1, string2){
    return compare(string1.toLowerCase(), string2.toLowerCase());
}

console.log(compare(string1,string2));
console.log(compareLength(string1, string2));
console.log(compareIgnoresCase(string1, string2));