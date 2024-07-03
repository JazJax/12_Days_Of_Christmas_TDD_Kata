import { Song } from '@/song';

// Should return the first line of the 1st verse
// Should return the first line of the 2nd verse
// Should return the first line of any verse


describe('SingVerse', () => {
  it('should return the first verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(1)
    expect(result).toBe(
      ["On the first day of Christmas",
        "My true love gave to me",
      "A partridge in a pear tree"].join('\n'))
  })

  it('should return the 2nd verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(2)
    expect(result).toBe(
      ["On the second day of Christmas",
        "My true love gave to me",
        "Two turtle doves, and",
        "A partridge in a pear tree"].join('\n'))
  });

  it('should return the first 2 lines of verses 3-12', () => {
    const mySong: Song = new Song
    let dayName: String[] = ['third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth', 'eleventh', 'twelfth']

    function checkVerse(dayName: String, verseNumber: number) {
      const result: string = mySong.SingVerse(verseNumber)
      expect(result).toBe(
        [`On the ${dayName} day of Christmas`,
          "My true love gave to me"].join('\n'))
    }

    dayName.forEach((day,index) => checkVerse(day, index+3))
  });

});
