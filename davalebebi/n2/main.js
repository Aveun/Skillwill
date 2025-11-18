document.addEventListener("DOMContentLoaded", () => {
  const allowedColors = ["red", "blue", "green", "black", "white"];
  const inputEl = document.getElementById("colorInput");
  const btn = document.getElementById("changeBtn");

  function applyColor() {
    const raw = inputEl.value || "";
    const color = raw.trim().toLowerCase();

    if (!color) {
      alert("გთხოვ, ჩაწერე ფერი.");
      return;
    }

    if (!allowedColors.includes(color)) {
      alert("ამ ფერის შეცვლა არ შეიძლება! სცადე: red, blue, green, black, white");
      return;
    }

    document.body.style.backgroundColor = color;

    if (color === "black") {
      document.body.style.color = "#fff";
    } else if (color === "white") {
      document.body.style.color = "#000";
    } else {
      document.body.style.color = color === "blue" || color === "green" ? "#fff" : "#000";
    }
  }

  btn.addEventListener("click", applyColor);

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      applyColor();
    }
  });
});
