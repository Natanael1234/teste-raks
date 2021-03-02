
export function validateMandatory(value) {
    return value ? null : 'Campo obrigatório.';
}
export function validateExactLength(value, len) {
    return value?.length < len ? 'O campo deve conter exatamente ' + len + ' caracteres ou mais.' : null;
}
export function validateMinLenth(value, len) {
    return value?.length < len ? 'O campo deve conter ' + len + ' caracteres ou mais.' : null;
}
export function validatMaxLength(value, len) {
    return value?.length > len ? 'O campo deve conter ao menor ' + len + ' caracteres.' : null;
}
export function validateLengthRange(value, minLen, maxLen) {
    return validateMinLenth(value, minLen) || validatMaxLength(value, maxLen);
}
export function validateCPF(value) {
    let error = validateMandatory(value);
    if (error) return error;
    value = value.replace(/\D/g, '');
    let re = /^(\d{3}\.d{3}\.d{3}-\.d{2}|\d{11})$/;
    let valid = re.test(String(value).toLowerCase());
    if (!valid) return 'Formato de CPF inválido.';
    error = validateExactLength(11);
    if (error) return error;
    let soma;
    let resto;
    soma = 0;
    if (value == "00000000000") return 'CPF inválido.';
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(value.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(value.substring(9, 10))) return 'CPF inválido.';
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(value.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(value.substring(10, 11))) return 'CPF inválido.';
    return null;
}
export function validateNome(value) {
    let error = validateMandatory(value);
    if (error) return error;
    error = validateLengthRange(value, 3, 60);
    if (error) return error;
    let re = /^[a-zA-Zà-úÀ-Ú0-9]+(\s+[a-zA-Zà-úÀ-Ú0-9]+)+$/;
    let valid = re.test(String(value).toLowerCase());
    return valid ? null : 'Nome inválido.';
}
export function validateEmail(value) {
    let error = validateMandatory(value);
    if (error) return error;
    error = validateLengthRange(value, 3, 60);
    if (error) return error;
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = re.test(String(value).toLowerCase());
    return valid ? null : 'Email inválido.';
}
export function validateFone(value) {
    let error = validateMandatory(value);    
    if (error) return error;    
    let re = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;
    let valid = re.test(String(value).toLowerCase());
    return valid ? null : 'Telefone inválido.';
}



