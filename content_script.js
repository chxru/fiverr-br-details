const main = () => {
  const rows = document.querySelectorAll(".db-new-main-table tbody tr");

  if (!rows.length) return false;

  rows.forEach((row) => {
    // parse meta-data
    const data = JSON.parse(
      row.querySelector(".btn-standard").getAttribute("data-meta")
    );

    // create node for client detials
    const name_tag = document.createElement("a");
    name_tag.setAttribute("href", `https://www.fiverr.com/${data.username}`);
    name_tag.setAttribute("target", "_blank");
    name_tag.innerText = data.username;

    // display client name
    const buyer_col = row.getElementsByTagName("td")[1];
    buyer_col.replaceChild(name_tag, buyer_col.getElementsByTagName("span")[0]);
  });

  return true;
};

const timer = setInterval(() => {
  const done = main();
  if (done) clearInterval(timer);
}, 500);
