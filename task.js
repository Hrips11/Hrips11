let name = prompt("Please enter your name");

let qa = ["0 - Tatevik", "    1 -  Hripsime", "    2 - Anna", "    3 - Vazgen", "    4 - Arpine", "    5 - Karine", "     6 - Sergey", "    7 - Ani", "     8 - Tigran", "     9 - Styopa", "       10 - Narek", "    11 - Narine"];

while (true) {

  let answer = prompt(`Hi ${name}\nWho is your favoite QA engineer? \n\n${qa}\n\nPlease write the number.\n\nIf you want to exit press Exit.`);


  if (answer === "Exit") {
    alert(`Thank you ${name}`);
    break;
  }
  let answer1 = +answer;
  if (qa.includes(qa[answer1])) {
    alert("Good choice! \n" + "Who is the next one?");
  } else if (answer > 11 || answer < 0 ) {
    alert("Please choose right number");
  } else {
    alert("Please write the number\n\nIf you want to exit please press Exit");
  }
}
