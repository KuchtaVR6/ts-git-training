export const computeFibonacciNumber = (position: number, isRecursive: boolean = false): number => {
    if (isRecursive) return recursiveFibonacci(position);

    if (position === 1 || position === 2) {
        return 1;
    }
    
    if (position < 0) {
        return computeNegativeFibonacci(position);
    }

    let smallFibonacciNumber = 1;
    let largeFibonacciNumber = 1;

    if (position < 0) {
        return computeNegativeFibonacci(position);
    }

    let currentPosition = 2;
    while (currentPosition < position) {
        const nextFibonacciNumber = smallFibonacciNumber + largeFibonacciNumber;
        smallFibonacciNumber = largeFibonacciNumber;
        largeFibonacciNumber = nextFibonacciNumber;
        currentPosition++;
    }
    return largeFibonacciNumber;
};

const recursiveFibonacci = (previous: number, current: number, stepsLeft: number): number => {
    if (stepsLeft < 0) {
        return 1;
    }
    switch (stepsLeft) {
        case 0:
            return current;
        default:
            return recursiveFibonacci(current, previous + current, stepsLeft - 1);
    }
}

const computeNegativeFibonacci = (position: number): number => {
    if (position >= 0) {
        throw new Error(`Position must be less than zero! Received: ${position}.`);
    }
    const resultIsNegative = position % 2 === 0;
    const absoluteResult = computeFibonacciNumber(-position);
    return resultIsNegative ? absoluteResult * -1 : absoluteResult;
}
