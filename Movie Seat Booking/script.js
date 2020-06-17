const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector(".count");
const total = document.querySelector(".price");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value; //parse a string to an int by prefixing '+'

populateUI();

//Get data afrom storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  console.log(selectedSeats);

  if (selectedSeats != null) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  movieSelectedIndex = localStorage.getItem("movieSelectedIndex");
  moviePrice = localStorage.getItem("moviePrice");

  //set in UI
  movieSelect.selectedIndex = movieSelectedIndex;
  if (selectedSeats != null) {
    totalMoviePrice = moviePrice * selectedSeats.length;
    count.innerText = selectedSeats.length;
    total.innerText = totalMoviePrice;
  }
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  //console.log(seatsIndex);

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  const totalPrice = selectedSeatsCount * ticketPrice;
  total.innerText = totalPrice;
}

function saveMovieData(movieSelectedIndex, moviePrice) {
  localStorage.setItem("movieSelectedIndex", movieSelectedIndex);
  localStorage.setItem("moviePrice", moviePrice);
}

//Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  console.log(e.target.selectedIndex);
  saveMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

//Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
