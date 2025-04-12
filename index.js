function hideBio() {
  const bioBottomBox = document.getElementsByClassName("bio-bottom-box")[0];
  const itemBox = document.getElementById("item-box-bio");
  const open = document.getElementById("dropdown-icon-down");
  const closed = document.getElementById("dropdown-icon-right");

  if (bioBottomBox.style.display === "block") {
    bioBottomBox.style.display = "none";
    itemBox.classList.remove("pb-1");
    open.style.display = "none";
    closed.style.display = "block";
  } else {
    bioBottomBox.style.display = "block";
    itemBox.classList.add("pb-1");
    open.style.display = "block";
    closed.style.display = "none";
  }
}

function copyEmail() {
  navigator.clipboard.writeText("contact@altamashali.com");
  const confirmation = document.getElementById("copied-confirmation");
  confirmation.style.display = "block";
  setTimeout(() => {
    confirmation.style.display = "none";
  }, "3000");
}
