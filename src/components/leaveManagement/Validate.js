export const requiredErrorString = key => key ? `${key.split('_').map(k => k[0].toUpperCase() + k.substr(1)).join(' ')} required` : 'Required';

export const validatePhone = number => number.match(/^\d{10}$/);

export const validatePin = pin => pin.match(/^\d{6}$/);

export const validateYear = year => {
    const currYear = new Date().getFullYear();
    if (!year) return "Year is required";
    if (year.length !== 4) return "Invalid Year";
    if (!year.match(/\d{4}/)) return "Invalid Year";
    if (parseInt(year) > currYear || parseInt(year) < 1900) return "Invalid Year";
    return "";
}

export const validateMark = mark => {
    if (!mark) return "Mark is required";
    if (isNaN(mark)) return "Invalid Mark";
    if (parseFloat(mark) < 0 || parseFloat(mark) > 100) return "Invalid Mark";
    return "";
}

export const validateEmail = email => email.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/);

export const validateString = string => string.match(/^[A-Za-z]+$/);