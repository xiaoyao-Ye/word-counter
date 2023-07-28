import fs from "fs";
import { ParseEnglish } from "parse-english";

// RootNode 根节点
// ParagraphNode 段落节点
// SentenceNode 句子节点
// WordNode 文本节点
// TextNode 文本节点.value
// PunctuationNode 标点节点
// WhiteSpaceNode 空格节点
// WhiteSpaceNode 空格节点

const getParagraph = (tree) => {
  return tree.children.filter((item) => item.type === "ParagraphNode");
  // .flat()
};

const getSentence = (paragraph) => {
  return paragraph
    .map((item) => item.children.filter((item) => item.type === "SentenceNode"))
    .flat();
};

const getWord = (sentence) => {
  return sentence
    .map((item) => item.children.filter((item) => item.type === "WordNode"))
    .flat();
};

const getText = (word) => {
  return word.map((item) => item.children.map((item) => item.value).join(""));
  // .map((item) => item.children.filter((item) => item.type === "TextNode"))
  // .flat();
};

const statistics = (textList) => {
  let countObj = {};
  for (let item of textList) {
    if (/^\d+$/.test(item)) continue;
    const text = item.toLowerCase();
    if (countObj[text]) {
      countObj[text]++;
    } else {
      countObj[text] = 1;
    }
  }
  return countObj;
};

const sortObj = (obj) =>
  Object.fromEntries(Object.entries(obj).sort((a, b) => b[1] - a[1]));

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const docs = await readFile("./deliberate-practice-guide.md");

const tree = new ParseEnglish().parse(docs);
const paragraphList = getParagraph(tree);
const sentenceList = getSentence(paragraphList);
const wordList = getWord(sentenceList);
const textList = getText(wordList);
const countObj = statistics(textList);
let sortedObj = sortObj(countObj);
console.log(sortedObj);
