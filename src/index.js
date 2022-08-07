const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    // write your solution here
    let arr = expr.match(/.{1,10}/g);
    let res = '';
    let newArr =[];
    for (let i=0; i<arr.length; i++) {
        arr[i] = arr[i].replace(/11/g,'-');
        arr[i] = arr[i].replace(/10/g,'.');
        arr[i] = arr[i].replace(/0/g,'');
        newArr.push(arr[i])
    }
    for (let i in newArr) {
        for (key in MORSE_TABLE) {
        if (key === newArr[i]) {
            res += MORSE_TABLE[key];
        }
        }
    }
    return res;
}

module.exports = {
    decode
}