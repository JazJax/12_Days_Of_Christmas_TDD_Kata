export class Song {

    SingSong(): string {
        let verseArray: String[] = []

        verseArray.push(this.SingVerse(1))
        verseArray.push(this.SingVerse(2))
        
        return verseArray.join("\n\n\n")
    }

    SingVerse(verseNumber: number): string {
        let dayName: String[] = [
            'first','second', 'third', 'fourth'
            , 'fifth', 'sixth', 'seventh', 'eigth'
            , 'ninth', 'tenth', 'eleventh', 'twelfth'
        ]
        let verseLines: String[] = [
            'Twelve drummers drumming'
            , 'Eleven pipers piping'
            , 'Ten lords a-leaping'
            , 'Nine ladies dancing'
            , 'Eight maids a-milking'
            , 'Seven swans swimming'
            , 'Six geese a-laying'
            , 'Five gold rings'
            , 'Four calling birds'
            , 'Three french hens'
            , 'Two turtle doves, and'
            , 'A partridge in a pear tree'
        ].reverse()

        let resultArray: String[] = [
            `On the ${dayName[verseNumber-1]} day of Christmas`
            , `My true love gave to me`
        ]

        while (verseNumber > 0) {
            verseNumber --
            resultArray.push(verseLines[verseNumber])
        }
        
        return resultArray.join('\n')
    }
}