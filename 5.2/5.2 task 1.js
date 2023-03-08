const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");

const listJS = [];
for (let index = 0; index < listNode.children.length; index++) {
  const element = listNode.children[index];
  const nameNode = element.querySelector("name");
  const firstNameNode = nameNode.querySelector("first");
  const secondNameNode = nameNode.querySelector("second");
  const ageNode = element.querySelector("age");
  const profNode = element.querySelector("prof");
  const attNameNode = nameNode.getAttribute("lang");

  const elemList = {
    name: firstNameNode.textContent + " " + secondNameNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: attNameNode
  };
  listJS.push(elemList);
}

const newObj = {
  list: listJS
};

console.log(newObj)