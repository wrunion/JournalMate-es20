export class Entry {
  constructor(userName, title, post) {
    this.userName = userName;
    this.title = title;
    this.post = post;
  }
  countWords() {
    let postWords = this.post;
    let strArray = postWords.split(" ");
    return strArray.length;
  }
  countVowels() {
    let postWords = this.post;
    let vowelRegex = /[aeiou]/gi;
    let vowels = postWords.match(vowelRegex);
    return vowels.length;
  }
  countConsonants() {
    let postWords = this.post;
    let consonantRegex = /[^aeiou]/gi;
    let consonants = postWords.match(consonantRegex);
    return consonants.length;
  }


}