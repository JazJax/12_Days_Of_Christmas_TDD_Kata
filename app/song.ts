export class Song {
    SingVerse(verseNumber: number): string {
        let dayName: String[] = ['first','second']
        return [`On the ${dayName[verseNumber-1]} day of Christmas`,
        `My true love gave to me`].join('\n')
    }
}