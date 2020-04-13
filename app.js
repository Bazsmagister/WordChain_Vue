var app = new Vue({
  el: "#app",
  data: {
    newWord: "",
    title: "Wordchain",
    last_word: "",
    thelastletter: "",
    //props: ["thelastletter"],
    words: [
      "Alg",
      "Ben",
      "Col",
      "Dae",
      "Ele",
      "Fol",
      "Gor",
      "Hia",
      "Ial",
      "Jal",
      "Lac",
      "Mat",
      "Neo",
      "Osp",
      "Pan",
      "Qua",
      "Rub",
      "San",
      "Tel",
      "Una",
      "Ver",
      "Welt",
      "Xyz",
      "Ytt",
      "Zol",
    ],
  },
  methods: {
    addWord() {
      this.words.push(this.newWord);
      this.newWord = "";
      //alert the last element of the array:
      //alert(this.words[this.words.length - 1]);
    },
    lastword() {
      var last_word = this.words[this.words.length - 1];
      alert(last_word);
      return last_word;
    },
    lastwordslastletter() {
      var thelastletter = this.last_word.charAt(this.last_word.length - 1);
      alert(thelastletter);
      return thelastletter;
    },
    lastletter() {
      //let thelastletter = this.newWord.reverse()[0];
      //let thelastletter = this.newWord.slice(-1)[0];
      //let thelastletter = this.newWord.slice(-1).pop();
      //let thelastletter = this.newWord.charAt(this.newWord.length - 1);
      //let thelastletter = words[words.length].charAt(this.newWord.length - 1);
      //let thelastletter = words[words.length];
      //console.log(thelastletter);
      //alert(this.thelastletter);
      //alert(thelastletter);
      //return thelastletter;
      //alert(this.thelastletter);
    },
  },
});
