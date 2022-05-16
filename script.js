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
        out.push("added edge " + parseFloat(words[4]).toFixed(3) + " from " + words[2] + " to " + words[3] + " in " + words[1]);
      } else if (words[0] == "ListNodes") {
        out.push(words[1] + " contains:" + " INSERT HERE");
      } else if (words[0] == "ListChildren") {
        out.push("the children of " + words[2] + " in " + words[1] + " are: INSERT HERE");
      } else if (words[0] == "FindPath") {
        out.push(`path from ${words[2]} to ${words[3]}:`);
        out.push(`${words[2]} to INSERT_NODE_2 with weight INSERT_WEIGHT_W1`)
        out.push(`...`)
        out.push(`INSERT_NODE_N-1 to ${words[3]} with weight INSERT_WEIGHT_WN-1`)
        out.push(`total cost: INSERT_HERE`)
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