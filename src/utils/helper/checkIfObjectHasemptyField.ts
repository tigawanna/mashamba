//  check if an object has an empty values
export function checkIfEmpty<T=unknown>(obj:T){
    for (const key in obj) {
        if (typeof obj[key as keyof T] ==="string" && obj[key as keyof T] === "") {
            console.log(obj[key as keyof T] ," string field  is empty")
            return true;
        }
        if (typeof obj[key as keyof T] === "number" && obj[key as keyof T] === 0) {
            console.log(obj[key as keyof T], "  number field is empty")
            return true;
        }
        if (obj[key as keyof T] instanceof File  && !obj[key as keyof T] ) {
            console.log(obj[key as keyof T], "  file field is empty")
            return true;
        }
    }
    return false;
}
