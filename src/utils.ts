export const DateFormat = 'YYYY-MM-DD';

export const verificationTokeStorage = (valueStorage: string | null) => {
    if (valueStorage === null) {
        return true;
    } else {
        return false;
    }
}