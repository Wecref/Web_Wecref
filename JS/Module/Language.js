export function getLanguage() {
    return navigator.language || navigator.userLanguage;
};

export function isKorea() {
    let currentLang = getLanguage().substr(0, 2);
    if (currentLang == "ko"){
        return true;
    } 
    else
    {
        return false;
    }
}