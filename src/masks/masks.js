export function foneMask(value) {
    if (!value) return '';
    let digits = value.replace(/\D/g, '');
    digits = digits.slice(0, 11);
    if (digits.length >= 10) {
        return digits.replace(/^(\d{2})(\d{5})(\d*)$/, '($1) $2-$3');
    }
    else if (digits.length > 6) {
        return digits.replace(/^(\d{2})(\d{4})(\d*)$/, '($1) $2-$3');
    }
    else if (digits.length > 2) {
        return digits.replace(/^(\d{2})(\d*)$/, '($1) $2');
    }
    else {
        return digits.replace(/^(\d*)$/, '($1');
    }
}

export function cpfMask(value) {
    if (!value) return '';
    let digits = value.replace(/\D/g, '');
    if (digits.length >= 9) {
        return digits.replace(/^(\d{3})(\d{3})(\d{3})(\d*)$/, '$1.$2.$3-$4');
    }
    else if (digits.length > 6) {
        return digits.replace(/^(\d{3})(\d{3})(\d*)$/, '$1.$2.$3');
    }
    else if (digits.length > 2) {
        return digits.replace(/^(\d{3})(\d*)$/, '$1.$2');
    } else {
        return digits.replace(/^(\d*)$/, '$1');
    }
}

export function nomeMask(value) {   
    if (!value) return '';        
    return value.replace(/([^a-zA-Zà-úÀ-Ú\s0-9])+/g, '');
}

export function emailMask(value) { 
    value = (value||'').replace(/(\s)/g, '');
    if (!value) return '';
    value = value.replace(/[\s]*/g, '');
    value = value.split(' ').join('');
    if (!value) return '';    
    value = value.replace(/^[^a-zA-Z_\.@]+/g, '');
    value = value.replace(/[^a-zA-Z0-9_\.@]+/g, '');
    value = value.replace(/(@^[^a-zA-Z_]+|@+)/g, '@');
    value = value.replace(/(\.[^a-zA-Z_]+|\.+)/g, '.');
    let atIdx = value.indexOf('@');
    if (atIdx > -1) {
        let p1 = value.slice(0, atIdx);
        let p2 = value.slice(atIdx).replace(/@/g, '');
        value = p1 + '@' + p2;
    }
    return value;
}

