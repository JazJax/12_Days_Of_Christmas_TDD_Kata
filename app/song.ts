export class Song {
    SingVerse(verseNumber: number): string {
        let dayName: String[] = ['first','second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth', 'eleventh', 'twelfth']
        return [`On the ${dayName[verseNumber-1]} day of Christmas`,
        `My true love gave to me`].join('\n')
    }
}