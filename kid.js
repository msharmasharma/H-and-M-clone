function middleBody() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var reading = document.getElementById("reading");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    reading.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    reading.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function read() {
  var dot = document.getElementById("dot");
  var moreTexts = document.getElementById("mores");
  var readValue = document.getElementById("readValue");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    readValue.innerHTML = "Read More";
    moreTexts.style.display = "none";
  } else {
    dot.style.display = "none";
    readValue.innerHTML = "Read Less";
    moreTexts.style.display = "inline";
  }
}
