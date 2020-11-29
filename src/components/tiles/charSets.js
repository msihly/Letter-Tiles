const CHAR_SETS = new Map([
    ["Alphabet", [
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ]],
    ["Digraphs & Trigraphs", [
        ["ch", "sh", "th", "wh", "ph", "gh", "ng", "ck", "dge", "tch"],
    ]],
    ["Vowel Teams", [
        ["ea", "ai", "oi", "ou", "ee", "ay", "oo", "oa", "ow", "oe", "eu", "ew", "ue", "ui", "oy", "au", "aw", "eigh", "ough", "aigh", "igh"],
    ]],
    ["Vowel-R Combinations", [
        ["er", "ar", "or", "ir", "ur", "oar", "air", "our", "ore", "ear", "eer", "ure", "are", "ere", "ire"],
    ]],
    ["Special Consonant Teams", [
        ["ff", "zz", "ll", "ss", "gn", "kn", "lk", "eigh", "gh", "wr", "mb", "mn", "que", "gu"],
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