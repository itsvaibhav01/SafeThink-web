// Results tabs (Fig 5/6/7)
const rTabs = document.querySelectorAll(".rtab");
const rPanes = document.querySelectorAll(".rtabpane");

rTabs.forEach((t) => {
  t.addEventListener("click", () => {
    rTabs.forEach(x => x.classList.remove("active"));
    rPanes.forEach(p => p.classList.remove("active"));

    t.classList.add("active");
    const id = t.dataset.tab;
    const panel = document.getElementById(id);
    if (panel) panel.classList.add("active");
  });
});

// Copy BibTeX
const copyBtn = document.getElementById("copyBib");
const bib = document.getElementById("bibtex");

copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(bib.innerText.trim());
    const old = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = old), 1200);
  } catch {
    const old = copyBtn.textContent;
    copyBtn.textContent = "Copy failed";
    setTimeout(() => (copyBtn.textContent = old), 1200);
  }
});
