import { Song } from '@/song';

// Should return the first line of the 1st verse
// Should return the first line of the 2nd verse
// Should return the first line of any verse


describe('song', () => {
  it('should return the first line of the 1st verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(1)
    expect(result).toBe("On the first day of Christmas")
  });
  it('should return the first line of the 2nd verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(2)
    expect(result).toBe("On the second day of Christmas")
  });
});
