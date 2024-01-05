export const fetchLocalStorage = (Name) => {
    let data = localStorage.getItem(Name);
    if(data){
        return JSON.parse(localStorage.getItem(Name));
    } else {
        return [];
    }
}

export const storeLocalStorage = (Name, data) => {
    localStorage.setItem(Name, JSON.stringify(data));
}