import { Song } from '@/song';

// Should return the first line of the 1st verse
// Should return the first line of the 2nd verse
// Should return the first line of any verse


describe('song', () => {
  it('should return the first 2 lines of the 1st verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(1)
    expect(result).toBe(
      ["On the first day of Christmas",
      "My true love gave to me"].join('\n'))
  });
  it('should return the first line of the 2nd verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(2)
    expect(result).toBe(
      ["On the second day of Christmas",
      "My true love gave to me"].join('\n'))
  });
});
