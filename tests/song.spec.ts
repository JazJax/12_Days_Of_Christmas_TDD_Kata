import { Song } from '@/song';
import * as fs from 'fs';

// Should return the first line of the 1st verse
// Should return the first line of the 2nd verse
// Should return the first line of any verse

const fullSong: String = fs.readFileSync('tests/fullsong.txt','utf8');

function getVerse(verseNumber: number ){
  return fullSong.split('\n\n\n')[verseNumber-1]
}

describe('SingVerse', () => {
  it('should return the first verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(1)
    let expectedResult = getVerse(1)
    expect(result).toBe(expectedResult)
  })

  it('should return the 2nd verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(2)
    let expectedResult = getVerse(2)
    expect(result).toBe(expectedResult)
  });

  it('should return the 3rd verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(3)
    let expectedResult = getVerse(3)
    expect(result).toBe(expectedResult)
  });

  it('should return the 12th verse', () => {
    const mySong: Song = new Song
    const result: string = mySong.SingVerse(12)
    let expectedResult = getVerse(12)
    expect(result).toBe(expectedResult)
  })
});

describe('SingSong', () => {
  it('should sing the whole song', () => {
    const mySong: Song = new Song
    const expectedResult: String = fullSong

    const result: string = mySong.SingSong()
    expect(result).toBe(expectedResult)
  })
})
