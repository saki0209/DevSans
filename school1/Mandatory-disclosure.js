function filterTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const table = document.querySelector("table");
    const trs = table.querySelectorAll("tbody tr");
    trs.forEach(tr => {
      const tds = tr.querySelectorAll("td");
      const match = Array.from(tds).some(td => td.textContent.toUpperCase().includes(filter));
      tr.style.display = match ? "" : "none";
    });
  }
  function filterTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const table = document.querySelector("table");
    const trs = table.querySelectorAll("tbody tr");
    trs.forEach(tr => {
      const tds = tr.querySelectorAll("td");
      const match = Array.from(tds).some(td => td.textContent.toUpperCase().includes(filter));
      tr.style.display = match ? "" : "none";
    });
  }
  function toggleDetails(event) {
    const row = event.currentTarget;
    const detailsRow = row.nextElementSibling;
    if (detailsRow && detailsRow.classList.contains("details-row")) {
      detailsRow.style.display = detailsRow.style.display === "table-row" ? "none" : "table-row";
    }
  }
  document.querySelectorAll("tbody tr").forEach(row => {
    row.addEventListener("click", toggleDetails);
  });