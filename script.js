function onKeyHandler() {
  const inputText = document.getElementById("inputText").value;
  const temp0 = removeNumbers(inputText);
  const temp1 = removeLineBreaks(temp0);
  document.getElementById("outputText").innerText = temp1;
}

function removeNumbers(inputText) {
  return inputText.replace(/\d/g, "");
}

function removeLineBreaks(inputText) {
  return inputText
    .split("\n")
    .map((currLine, idx, arr) => {
      const prevLine = idx > 0 ? arr[idx - 1] : undefined;
      const nextLine = idx < arr.length - 1 ? arr[idx + 1] : undefined;

      if (currLine !== "" && !prevLine && !nextLine) return `...${currLine}...`;

      if (!currLine && prevLine) return "\n\n";

      if (!currLine) return "\n";

      return currLine;
    })
    .join(" ");
}

const copyHandler = () => {
  const inputTextField = document.getElementById("inputText");

  // Select the text field
  inputTextField.select();
  inputTextField.setSelectionRange(0, 99999); // For mobile devices

  const temp0 = removeNumbers(inputTextField.value);
  const temp1 = removeLineBreaks(temp0);
  // Copy the text inside the text field
  navigator.clipboard.writeText(temp1);
};
