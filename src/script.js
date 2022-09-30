alert('Завдання 1')
let firstRow = prompt('Введіть перше речення')
let secondRow = prompt('Введіть друге речення')
let a = prompt('Яку букву шукати?', 'a')

function getRow(firstRow, secondRow) {
    first = 0
    second = 0
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) === a){
            first++
        }
    }
    for (var i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) === a){
            second++
        }
    }
    if (first > second){
        return firstRow
    }
    else{
        return secondRow
    }
}
a = getRow(firstRow, secondRow)
console.log(a);
alert(a);

alert('Завдання 2')
let phone = prompt('Введіть телефон')
function formattedPhone(phone) {
    if (phone.length == 10){
        phone = '+7' + phone;
    }
    else if (phone.length == 11){
        if(phone.charAt(0) == 8){
            phone[0]= '7'
            phone = '+' + phone;
        }
        else if(phone.charAt(0) == 7){
            phone = '+' + phone;
        }
        else{
            alert('формат функции неверный')
            return ""
        }
        
    }
    else if(phone.length = 12 && phone.charAt(0)== '+' && phone.charAt(1) == 7){
        //все гаразд
    }
    else{
        alert('формат функции неверный')
        return ""
    }
    num = ''
    for (let i = 0; i < phone.length; i++) {
        if (i == 2){
            num += " ("
        }
        else if(i == 5){
            num += ") "
        }
        else if(i == 8){
            num += "-"
        }
        else if(i == 10){
            num += "-"
        }
        num += phone.charAt(i);
    }
    return num
}
phone = formattedPhone(phone);
console.log(phone); // +7 (123) 456-78-90
alert(phone);