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
  getTeaser() {
    let postWords = this.post;
    postWords = postWords.split(".");

    if (postWords[0].length < 8) {
      return postWords[0].toString().replace(/,/g, " ");

    } else {
      let targetSentence = postWords[0].split(" ");
      let displaySentence = targetSentence.slice(0,8).toString().replace(/,/g, " ");
      return displaySentence;
    }
  }
  displayEntry() {
    $("#resultsDiv").append(`<section class="entryStyle"><h3>${this.title}<p class="sub header">${this.userName}</p></h3><p class="postStyle">${this.post}</p>
    </section>`);
    
  }
}