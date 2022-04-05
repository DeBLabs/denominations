console.log('hello!')
function calculateDenominations() {
  let notes_2000 = 2000 * document.getElementById("2000den").value;
  document.getElementById("result_2000").innerText = notes_2000;
  let notes_500 = 500 * document.getElementById("500den").value;
  document.getElementById("result_500").innerText = notes_500;
  let notes_200 =200 * document.getElementById("200den").value;
  document.getElementById("result_200").innerText = notes_200;
  let notes_100 = 100 * document.getElementById("100den").value;
  document.getElementById("result_100").innerText = notes_100;
  let notes_50 = 50 * document.getElementById("50den").value;
  document.getElementById("result_50").innerText = notes_50;
  let notes_20 = 20 * document.getElementById("20den").value;
  document.getElementById("result_20").innerText = notes_20;
  let notes_10 =10 * document.getElementById("10den").value;
  document.getElementById("result_10").innerText = notes_10;
  let notes_5 = 5 * document.getElementById("5den").value;
  document.getElementById("result_5").innerText = notes_5;
  let coins_10 = 10 * document.getElementById("10c_den").value;
  document.getElementById("result_c_10").innerText = coins_10;
  let coins_5 = 5 * document.getElementById("5c_den").value;
  document.getElementById("result_c_5").innerText = coins_5;
  let coins_2 = 2 * document.getElementById("2c_den").value;
  document.getElementById("result_c_2").innerText = coins_2;
  let coins_1 = 1 * document.getElementById("1c_den").value;
  document.getElementById("result_c_1").innerText = coins_1;

  document.getElementById("result").innerHTML = notes_2000 + notes_500 + notes_200 + notes_100 + notes_50 + notes_20 + notes_10 + notes_5 + coins_10 + coins_5 + coins_2 + coins_1;
}