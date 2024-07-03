import { Song } from '@/song';
import * as fs from 'fs';

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

  it('should return the 3rd verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(3)
    expect(result).toBe(
      ["On the third day of Christmas",
        "My true love gave to me",
        "Three french hens",
        "Two turtle doves, and",
        "A partridge in a pear tree"].join('\n'))
  });

  it('should return the 12th verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(12)
    expect(result).toBe(
      ["On the twelfth day of Christmas",
        "My true love gave to me",
        "Twelve drummers drumming",
        "Eleven pipers piping",
        "Ten lords a-leaping",
        "Nine ladies dancing",
        "Eight maids a-milking",
        "Seven swans swimming",
        "Six geese a-laying",
        "Five gold rings",
        "Four calling birds",
        "Three french hens",
        "Two turtle doves, and",
        "A partridge in a pear tree"].join('\n'))
  })
});

describe('SingSong', () => {
  it('should sing the whole song', () => {
    const mySong: Song = new Song
    const expectedResult: String = fs.readFileSync('tests/fullsong.txt','utf8');

    const result: string = mySong.SingSong()
    expect(result).toBe(expectedResult)
  })
})
