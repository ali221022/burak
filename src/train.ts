// console.log("Hello World");
/*
G.TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK'
*/

function getHighestIndex(numbers: number[]): number {
    let max: number = numbers[0];  // `max`ni birinchi element bilan boshlaymiz
    let maxIndex: number = 0;      // `maxIndex`ni 0 deb boshlaymiz

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];      // Agar hozirgi element `max`dan katta bo'lsa, `max`ni yangilaymiz
            maxIndex = i;          // `maxIndex`ni hozirgi indeksga o'zgartiramiz
        }
    }

    return maxIndex;  // Eng katta qiymatning birinchi indeksini qaytaramiz
}

// Misol:
const result = getHighestIndex([90, 71, 92, 45, 88]);
console.log(result); // 1 chiqadi, chunki 21 ning birinchi indeksi 2 ga teng
