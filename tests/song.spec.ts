import { Song } from '@/song';

// Should return the first line of the 1st verse
// Should return the first line of the 2nd verse
// Should return the first line of any verse


describe('song', () => {
  it('should return the first line of the 1st verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.Sing()
    expect(result).toBe("On the first day of Christmas")
  });
});
