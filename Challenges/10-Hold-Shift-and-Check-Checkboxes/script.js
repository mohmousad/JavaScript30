// const list = [...document.querySelectorAll(".item")];
// const checkBoxList = [...document.querySelectorAll("input")];
// const pList = [...document.querySelectorAll("p")];

// checkBoxList.forEach((checkBox, index) => {
//   checkBox.addEventListener("click", () => {
//     pList[index].classList.toggle("checked");
//     if (checkBoxList.filter((checkBox) => checkBox.checked).length > 1) {
//       window.addEventListener("keydown", (e) => {
//         if (e.code === "ShiftLeft" && checkBoxList.filter((checkBox) => checkBox.checked).length > 1) {
//           con;
//         }
//       });
//     }
//   });
// });

const checkboxes = document.querySelectorAll("input");

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = e.target;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", handleCheck));
