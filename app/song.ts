export class Song {
    SingVerse(verseNumber: number): string {
        let dayName: String[] = ['first','second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth', 'eleventh', 'twelfth']
        
        let verseLines: String[] = ['A partridge in a pear tree', 'Two turtle doves, and', 'Three french hens']
        let resultArray: String[] = [`On the ${dayName[verseNumber-1]} day of Christmas`,
        `My true love gave to me`]

        if(verseNumber == 1){
            resultArray.push(verseLines[0])
        } else if(verseNumber == 2){
            resultArray.push(verseLines[1])
            resultArray.push(verseLines[0])
        } else if(verseNumber == 3){
            resultArray.push(verseLines[2])
            resultArray.push(verseLines[1])
            resultArray.push(verseLines[0])
        }
        
        return resultArray.join('\n')
    }
}