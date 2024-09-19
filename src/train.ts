/* Project Standarts:
- Logging standarts
- Naming standarts
    fuction, method, variable => CAMEL   goHome
    class => PASKAL                      MemberServise
    folder, file => KEBAB                      Folder-nome
    css => SNAKE                         button_style

- Error handling    

*/


/***
   Traditional API
   Rest API
   GraphQL API
   ...
 */

   /**
    Traditional FD => BSSR (Admin)  => EJS
    Modern FD   => SPA (User's aplication) => REACT  
    */
/**
   request join
   self destroy

 */


// console.log("Hello World");
/*
G.TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK'
*/

/*
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
console.log(result); // 2 chiqadi, chunki 92 ning birinchi indeksi 2 ga teng

*/

/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/

/*
function getPositive(arr: number[]): string {
    // Faqat positive qiymatlarni tanlab, ularni stringga aylantiramiz
    const positiveNumbers = arr.filter(num => num > 0).map(num => num.toString());
    // Ro'yxatdagi elementlarni birlashtirib, bitta string qilib qaytaramiz
    return positiveNumbers.join('');
}

// Misol uchun:
const result = getPositive([34, -47, 827]);
console.log(result);  // Bu yerda natija "34827" bo'ladi
*/

/*
H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@steezyworld MITASK
*/


/*
function getDigits(input: string): string {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const map = input[i];
        if (!isNaN(parseInt(map))) {  // Agar `map` raqam bo'lsa
            result += map;            // Uni natijaga qo'shamiz
        }
    }
    return result;
}

// Misol:
console.log(getDigits("m14i1t")); // "141" ni qaytaradi
*/


/***
 * TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda
 */

/*
function findLongestWord(word: string): string{
    const words =  word.split(" ");

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
};

const result = findLongestWord("I came from Uzbekistan!")
console.log(result);
*/

/***
 TASK K:

Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1

Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
bo'lganligi uchun '1'ni qaytarmoqda
 */

function countVowels(words: string): number {
    // Unli harflarni aniqlash uchun qabul qilinadigan harflar ro'yxati
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0; 

    for (let char of words) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Misol
console.log(countVowels("string")); // 1
