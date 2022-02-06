export const validate = (value, inputTyp, value2) => {
    switch (inputTyp) {
        case 'email':
            const re = /\S+@\S+\.\S+/;
            if (re.test(value)) return true
            else return 'Bitte gebe eine gültige Email ein'
        case 'password':
            const valueLength = value.length;
            if (valueLength >= 8) return true
            else return 'Dein Password muss mindestens 8 Zeichen lang sein'
        case 'password2':
            if (value === value2) return true
            else return 'Die Passwörter stimmen nicht überein'
        default:
            return true;
    }

}
export const checkEmtpy = (field) => {
    if (field !== '' && field.trim(' ')) return true
    else return false
}
export function getCurrentDate(separator = '') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();


    return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
}