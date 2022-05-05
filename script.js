function testToExpected(str) {
    let lines = str.split("\n");
    let out = [];
    for (let line of lines) {
      let words = line.split(" ");
      if (line.startsWith("#") || line === "") {
        out.push(line);
      } else if (words[0] == "CreateGraph") {
        out.push("created graph " + words[1]);
      } else if (words[0] == "AddNode") {
        out.push("added node " + words[2] + " to " + words[1]);
      } else if (words[0] == "AddEdge") {
        out.push("added edge " + words[4] + " from " + words[2] + " to " + words[3] + " in " + words[1]);
      } else if (words[0] == "ListNodes") {
        out.push(words[1] + " contains:" + " INSERT HERE");
      } else if (words[0] == "ListChildren") {
        out.push("the children of " + words[2] + " in " + words[1] + " are: INSERT HERE");
      }
    }
    return out.join("\n");
  }
  
  window.onload = () => {
    document.querySelector('#convert-btn').onclick = () => {
      let txt = document.querySelector('textarea').value;
      document.querySelector('code').innerText = testToExpected(txt);
    }
  }