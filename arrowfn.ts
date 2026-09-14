const getLarger = (num1: string, num2: string): string => {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

const result: string = getLarger('Amio', 'Amir');
console.log(result);