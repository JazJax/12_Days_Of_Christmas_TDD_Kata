export class Song {
    SingVerse(verseNumber: number): string {
        let dayName: String[] = ['first','second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth', 'eleventh', 'twelfth']
        
        let verseLines: String[] = [
            'Three french hens'
            , 'Two turtle doves, and'
            , 'A partridge in a pear tree'
        ]
        let resultArray: String[] = [`On the ${dayName[verseNumber-1]} day of Christmas`,
        `My true love gave to me`]

        while (verseNumber > 0) {
            resultArray.push(verseLines[3 - verseNumber])
            verseNumber --
        }
        
        return resultArray.join('\n')
    }
}