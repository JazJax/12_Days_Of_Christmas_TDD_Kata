export class Song {
    SingVerse(verseNumber: number): string {
        let dayName: String[] = ['first','second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth', 'eleventh', 'twelfth']
        
        let resultArray: String[] = [`On the ${dayName[verseNumber-1]} day of Christmas`,
        `My true love gave to me`]

        if(verseNumber == 1){
            resultArray.push('A partridge in a pear tree')
        }
        
        return resultArray.join('\n')
    }
}