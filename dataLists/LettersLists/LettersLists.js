const LANGUAGES_LETTERS = [
  {
    id: 1,
    language: "Urdu",
    gameLink: "urdu_game",
    lettersTable: "urdu_letters_table",

    LettersObject: [
      {
        id: 1,
        Letter: "Alif",
        Symbol: "ا",
      },
      {
        id: 2,
        Letter: "Bay",
        Symbol: "ب",
      },
      {
        id: 3,
        Letter: "Pay",
        Symbol: "پ",
      },
      {
        id: 4,
        Letter: "Tay",
        Symbol: "ت",
      },
      {
        id: 5,
        Letter: "TayD",
        Symbol: "ٹ",
      },
      {
        id: 6,
        Letter: "Say",
        Symbol: "ث",
      },
      {
        id: 7,
        Letter: "Jeem",
        Symbol: "ج",
      },
      {
        id: 8,
        Letter: "Che",
        Symbol: "چ",
      },
      {
        id: 9,
        Letter: "Hay",
        Symbol: "ح",
      },
      {
        id: 10,
        Letter: "Khay",
        Symbol: "خ",
      },
      {
        id: 11,
        Letter: "Dal",
        Symbol: "د",
      },
      {
        id: 12,
        Letter: "DalD",
        Symbol: "ڈ",
      },
      {
        id: 13,
        Letter: "Zaal",
        Symbol: "ذ",
      },
      {
        id: 14,
        Letter: "Ray",
        Symbol: "ر",
      },
      {
        id: 15,
        Letter: "RayD",
        Symbol: "ڑ",
      },
      {
        id: 16,
        Letter: "Zay",
        Symbol: "ز",
      },
      {
        id: 17,
        Letter: "Zwaad",
        Symbol: "ژ",
      },
      {
        id: 18,
        Letter: "Seen",
        Symbol: "س",
      },
      {
        id: 19,
        Letter: "Sheen",
        Symbol: "ش",
      },
      {
        id: 20,
        Letter: "Suaad",
        Symbol: "ص",
      },
      {
        id: 21,
        Letter: "Zuaad",
        Symbol: "ض",
      },
      {
        id: 22,
        Letter: "Toay",
        Symbol: "ط",
      },
      {
        id: 23,
        Letter: "Zoay",
        Symbol: "ظ",
      },
      {
        id: 24,
        Letter: "Ain",
        Symbol: "ع",
      },
      {
        id: 25,
        Letter: "Ghain",
        Symbol: "غ",
      },
      {
        id: 26,
        Letter: "Fay",
        Symbol: "ف",
      },
      {
        id: 27,
        Letter: "Qaaf",
        Symbol: "ق",
      },
      {
        id: 28,
        Letter: "Kaaf",
        Symbol: "ک",
      },
      {
        id: 29,
        Letter: "Gaaf",
        Symbol: "گ",
      },
      {
        id: 30,
        Letter: "Laam",
        Symbol: "ل",
      },
      {
        id: 31,
        Letter: "Meem",
        Symbol: "م",
      },
      {
        id: 32,
        Letter: "Noon",
        Symbol: "ن",
      },
      {
        id: 33,
        Letter: "Wow",
        Symbol: "و",
      },
      {
        id: 34,
        Letter: "Choti He",
        Symbol: "ہ",
      },
      {
        id: 35,
        Letter: "Ye",
        Symbol: "ی",
      },
      {
        id: 36,
        Letter: "Baari Ye",
        Symbol: "ے",
      },
      {
        id: 37,
        Letter: "Hamza",
        Symbol: "ء",
      },
      {
        id: 38,
        Letter: "Choti Yeh",
        Symbol: "ۓ",
      },
      {
        id: 39,
        Letter: "HeD",
        Symbol: "ھ",
      },
    ],
  },
  {
    id: 2,
    language: "Arabic",
    gameLink: "arabic_game",
    lettersTable: "arabic_letters_table",
    LettersObject: [
      {
        id: 1,
        Letter: "elif",
        Symbol: "ا",
      },
      {
        id: 2,
        Letter: "be",
        Symbol: "ب",
      },
      {
        id: 3,
        Letter: "te",
        Symbol: "ت",
      },
      {
        id: 4,
        Letter: "tha’",
        Symbol: "ث",
      },
      {
        id: 5,
        Letter: "jīm",
        Symbol: "ج",
      },
      {
        id: 6,
        Letter: "ḥā’",
        Symbol: "ح",
      },
      {
        id: 7,
        Letter: "khā’",
        Symbol: "خ",
      },
      {
        id: 8,
        Letter: "dāl",
        Symbol: "د",
      },
      {
        id: 9,
        Letter: "dhāl",
        Symbol: "ذ",
      },
      {
        id: 10,
        Letter: "rā’",
        Symbol: "ر",
      },
      {
        id: 11,
        Letter: "zāy",
        Symbol: "ز",
      },
      {
        id: 12,
        Letter: "sīn",
        Symbol: "س",
      },
      {
        id: 13,
        Letter: "shīn",
        Symbol: "ش",
      },
      {
        id: 14,
        Letter: "ṣād",
        Symbol: "ص",
      },
      {
        id: 15,
        Letter: "ẓā’",
        Symbol: "ظ",
      },
      {
        id: 16,
        Letter: "‘ayn",
        Symbol: "ع",
      },
      {
        id: 17,
        Letter: "ghayn",
        Symbol: "غ",
      },
      {
        id: 18,
        Letter: "fā’",
        Symbol: "ف",
      },
      {
        id: 19,
        Letter: "qāf",
        Symbol: "ق",
      },
      {
        id: 20,
        Letter: "kāf",
        Symbol: "ك",
      },
      {
        id: 21,
        Letter: "lām",
        Symbol: "ل",
      },
      {
        id: 22,
        Letter: "mīm",
        Symbol: "م",
      },
      {
        id: 23,
        Letter: "nūn",
        Symbol: "ن",
      },
      {
        id: 24,
        Letter: "hā’",
        Symbol: "ه",
      },
      {
        id: 25,
        Letter: "wāw",
        Symbol: "و",
      },
      {
        id: 26,
        Letter: "yā’",
        Symbol: "ي",
      },
    ],
  },
  {
    id: 3,
    language: "Farsi",
    gameLink: "farsi_game",
    lettersTable: "farsi_letters_table",
    LettersObject: [
      {
        id: 1,
        Letter: "hamze",
        Symbol: "ه",
      },
      {
        id: 2,
        Letter: "ʾalef",
        Symbol: "ا",
      },
      {
        id: 3,
        Letter: "be",
        Symbol: "ب",
      },
      {
        id: 4,
        Letter: "pe",
        Symbol: "پ",
      },
      {
        id: 5,
        Letter: "te",
        Symbol: "ت",
      },
      {
        id: 6,
        Letter: "s̱e",
        Symbol: "ث",
      },
      {
        id: 7,
        Letter: "jim",
        Symbol: "ج",
      },
      {
        id: 8,
        Letter: "če",
        Symbol: "چ",
      },
      {
        id: 9,
        Letter: "ḥe ",
        Symbol: "ح",
      },
      {
        id: 10,
        Letter: "xe",
        Symbol: "خ",
      },
      {
        id: 11,
        Letter: "dâl",
        Symbol: "د",
      },
      {
        id: 12,
        Letter: "ẕâl",
        Symbol: "ذ",
      },
      {
        id: 13,
        Letter: "re",
        Symbol: "ر",
      },
      {
        id: 14,
        Letter: "ze",
        Symbol: "ز",
      },
      {
        id: 15,
        Letter: "že",
        Symbol: "ژ",
      },
      {
        id: 16,
        Letter: "sin",
        Symbol: "س",
      },
      {
        id: 17,
        Letter: "šin",
        Symbol: "ش",
      },
      {
        id: 18,
        Letter: "ṣâd",
        Symbol: "ص",
      },
      {
        id: 19,
        Letter: "zâd",
        Symbol: "ض",
      },
      {
        id: 20,
        Letter: "tâ",
        Symbol: "ط",
      },
      {
        id: 21,
        Letter: "ẓâ",
        Symbol: "ظ",
      },
      {
        id: 22,
        Letter: "ʿayn ",
        Symbol: "ع",
      },
      {
        id: 23,
        Letter: "ġayn",
        Symbol: "غ",
      },
      {
        id: 24,
        Letter: "fe",
        Symbol: "ف",
      },
      {
        id: 25,
        Letter: "qâf",
        Symbol: "ق",
      },
      {
        id: 26,
        Letter: "kâf",
        Symbol: "ک",
      },
      {
        id: 27,
        Letter: "gâf",
        Symbol: "گ",
      },
      {
        id: 28,
        Letter: "lâm",
        Symbol: "ل",
      },
      {
        id: 29,
        Letter: "mim",
        Symbol: "م",
      },
      {
        id: 30,
        Letter: "nun",
        Symbol: "ن",
      },
      {
        id: 31,
        Letter: "vâv",
        Symbol: "و",
      },
      {
        id: 32,
        Letter: "he",
        Symbol: "ه",
      },
      {
        id: 33,
        Letter: "ye",
        Symbol: "ی",
      },
    ],
    // Add more properties as needed
  },
];

export default LANGUAGES_LETTERS;
