function onKeyHandler() {
  const inputText = document.getElementById("inputText").value;
  const temp0 = removeNumbers(inputText);
  const temp1 = removeLineBreaks(temp0);
  console.log(temp1);
  document.getElementById("editText").value = temp1;
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

const onEditButtonClickHandler = () => {
  onKeyHandler();
  document.getElementById("inputText").classList.toggle("hidden");
  document.getElementById("editText").classList.toggle("hidden");
};

const copyHandler = () => {
  const editTextField = document.getElementById("editText");

  // Select the text field
  editTextField.select();
  editTextField.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(editTextField.value);
};
