numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}

var finalResult = 0;
var operation = '';
var activeOperation = false;

const calculate = () => {
    actResult = parseFloat($('.result').text());
    switch (operation){
        case 'add':
            finalResult += actResult;
            break;
        case 'subtraction':
            finalResult -= actResult;
            break;
        case 'multiplication':
            finalResult *= actResult;
            break;
        case 'division':
            finalResult /= actResult;
            break;
        default:
            break;
    }
}

const emptyResult = () => {
    return $('.result').text() === '';
}

const firstChar = () => {
    return $('.result').text().charAt(0);
}

const hasChar = char => {
    result = $('.result').text();
    return result.indexOf(char) !== -1;
}

const append = txt => {
    result = $('.result').text();
    $('.result').text(result + txt)
}

const prepend = sign => {
    result = $('.result').text();
    $('.result').text(sign + result);
}

$('#ac').click(() => {
    $('.result').text('');
})

$('#sign').click(() => {
    if (firstChar() === '-'){
        result = $('.result').text()
        sbstr = result.substring(1, result.length);
        $('.result').text(sbstr);
    } else if (!emptyResult()) {
        prepend('-');
    }
})

$('#percentage').click(() => {
    if (!emptyResult()){
        percentage = parseFloat($('.result').text())/100;
        $('.result').text(percentage);
    }
})

$('.operation').click(e => {
    id = e.target.id;

    if (id === 'equal'){
        calculate();
        $('.result').text(finalResult);
        operation = '';
        activeOperation = false;
    } else {
        operation = id;
        activeOperation = true;
    }
})

$('.number').click(e => {
    id = e.target.id;
    num = numbers[id];

    if (activeOperation){
        finalResult = parseFloat($('.result').text());
        $('.result').text('');
        activeOperation= false;
    }

    if (firstChar() === '0'){
        if (hasChar('.')) { append(num); }
    } else { append(num); }
})

$('#decimal').click(() => {
    if (emptyResult()) { append('0.'); }
    else if (!hasChar()) { append('.'); }
})