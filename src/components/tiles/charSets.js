const CHAR_SETS = new Map([
  ["Alphabet", [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ]],
  ["Digraphs & Trigraphs", [
    ["ch", "sh", "th", "wh", "ph", "gh", "ng", "ck", "dge", "tch"],
  ]],
  ["Advanced Vowel Graphemes", [
    ["ea", "ai", "ie", "ee", "oo", "oa", "oe", "au", "eu", "ue", "ui", "ey", "ay", "aw", "ew", "oi", "oy", "ou", "ow", "igh", "aigh", "eigh", "augh", "ough"],
  ]],
  ["R-Controlled Vowels", [
    ["ar", "er", "ir", "ur", "ar", "or", "ore"],
  ]],
  ["Special Consonants", [
    ["ff", "zz", "ll", "ss", "gn", "kn", "gh", "wr", "mb", "ough"],
  ]],
  ["Chunks", [
    ["ild", "ost", "old", "olt", "ind", "ing", "ang", "ung", "ink", "ank", "unk", "all"]
  ]],
  ["Prefixes", [
    ["un", "re", "mis", "in", "ex", "pre", "non", "semi", "anti"],
  ]],
  ["Derivational Suffixes", [
    ["y", "less", "ness", "ful", "ly", "ment", "hood", "er", "or", "en"],
  ]],
  ["Inflectional Suffixes", [
    ["s", "'s", "ed", "ing", "en", "er", "est"],
  ]],
]);

export default CHAR_SETS;