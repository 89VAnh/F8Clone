const checkAll = document.querySelector("th input[type=checkbox]");
const checkBoxes = document.querySelectorAll("td input[type=checkbox]");

console.log(checkAll);
console.log(checkBoxes);

checkAll.onchange = () => {
  checkBoxes.forEach((checkBox) => {
    checkBox.checked = checkAll.checked;
  });
};
