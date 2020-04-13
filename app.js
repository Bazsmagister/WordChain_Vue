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
      //this.words += this.words.push(this.newWord);
      this.words.push(this.newWord);

      this.newWord = "";
      //return this.words;
      //alert the last element of the array:
      //alert(this.words[this.words.length - 1]);
      alert(this.words);
      return this.words;
    },
    lastwordandlastletter() {
      last_word = this.words[this.words.length - 1];
      alert(last_word);
      //return last_word;
      thelastletter = last_word.charAt(last_word.length - 1);
      alert(thelastletter);
      //return thelastletter;
      //alert(this.words[10]);

      var x;
      var y;
      for (x of this.words) {
        y = x.toLowerCase();
        if (y.charAt(0) == thelastletter) {

          alert(y);
        }
      }

    },


  },
});