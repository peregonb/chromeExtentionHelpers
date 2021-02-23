(() => {
  let arr = [0],
    el = document.querySelectorAll(".adminlist tr td:last-child"),
    i;

  for (i = 0; i <= el.length; i++) {
    if (el[i]) {
      arr.push(
        parseFloat(
          el[i].innerText
            .slice(0, el[i].innerText.length - 4)
            .replace(/,/g, ".")
        )
      );
    }
  }

  let finalText = arr.reduce((a, b) => a + b).toFixed(2),
    node = document.createElement("li");

  node.innerHTML = "<strong>Потратил: </strong>" + finalText + " грн";
  document.querySelector(".userOrdersInfo ul").appendChild(node);
})();
