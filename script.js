const name = document.querySelector("#name");
const number = document.querySelector("#number");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");
const Submit = document.querySelector("#submit");
const RightPart = document.querySelector(".right");
const ValidationPart =document.querySelector(".After-Submit");
const continued =  document.querySelector("#continue");
//-------------------------------------------------

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const ten = document.querySelector("#ten");
const eleven = document.querySelector("#eleven");
const twelve = document.querySelector("#twelve");
const thirteen = document.querySelector("#thirteen");
const fourteen = document.querySelector("#fourteen");
const fifiteen = document.querySelector("#fifiteen");
const sixteen = document.querySelector("#sixteen");

//---------------------------------------------
const dateone = document.querySelector("#date-one");
const datetwo = document.querySelector("#date-two");
const datethree = document.querySelector("#date-three");
const datefour = document.querySelector("#date-four");
//----------------------------------------------
const cvcone = document.querySelector("#cvc-one");
const cvctwo = document.querySelector("#cvc-two");
const cvcthree = document.querySelector("#cvc-three");
//----------------------------------------------
const NameCardholder = document.querySelector("#Name-cardholder");
let regexNumber = /^[0-9\s]+$/;
let regexName = /^[a-zA-Z\s]+$/;
function FillName() {
  if (name.value) {
    NameCardholder.textContent = name.value;
  } else {
    NameCardholder.textContent = "Jane Appleseed";
  }
}
name.addEventListener("input", FillName);

function FillNumber() {
  let numberSplited = number.value;
  numberSplited.split("");

  if (number.value) {
    one.textContent = numberSplited[0];
    two.textContent = numberSplited[1];
    three.textContent = numberSplited[2];
    four.textContent = numberSplited[3];
    five.textContent = numberSplited[4];
    six.textContent = numberSplited[5];
    seven.textContent = numberSplited[6];
    eight.textContent = numberSplited[7];
    nine.textContent = numberSplited[8];
    ten.textContent = numberSplited[9];
    eleven.textContent = numberSplited[10];
    twelve.textContent = numberSplited[11];
    thirteen.textContent = numberSplited[12];
    fourteen.textContent = numberSplited[13];
    fifiteen.textContent = numberSplited[14];
    sixteen.textContent = numberSplited[15];
  } else {
    one.textContent = "0";
    two.textContent = "0";
    three.textContent = "0";
    four.textContent = "0";
    five.textContent = "0";
    six.textContent = "0";
    seven.textContent = "0";
    eight.textContent = "0";
    nine.textContent = "0";
    ten.textContent = "0";
    eleven.textContent = "0";
    twelve.textContent = "0";
    thirteen.textContent = "0";
    fourteen.textContent = "0";
    fifiteen.textContent = "0";
    sixteen.textContent = "0";
  }
}
number.addEventListener("input", FillNumber);
function fillmonth() {
  let monthsplited = month.value;
  monthsplited.split("");
  if (month.value) {
    dateone.textContent = monthsplited[0];
    datetwo.textContent = monthsplited[1];
  } else {
    dateone.textContent = "0";
    datetwo.textContent = "0";
  }
}
month.addEventListener("input", fillmonth);
function fillyear() {
  let yearplited = year.value;
  yearplited.split("");
  if (year.value) {
    datethree.textContent = yearplited[0];
    datefour.textContent = yearplited[1];
  } else {
    datethree.textContent = "0";
    datefour.textContent = "0";
  }
}

year.addEventListener("input", fillyear);

function fillcvc() {
  let cvcsplitted = cvc.value;
  cvcsplitted.split("");
  if (cvc.value) {
    cvcone.textContent = cvcsplitted[0];
    cvctwo.textContent = cvcsplitted[1];
    cvcthree.textContent = cvcsplitted[2];
  } else {
    cvcone.textContent = "0";
    cvctwo.textContent = "0";
    cvcthree.textContent = "0";
  }
}
cvc.addEventListener("input", fillcvc);
function NumberCheck() {
  let numberRegex = /^[0-9\s]+$/;
  if (!numberRegex.test(number.value) || number.value == "") {
    number.style.border = "1px solid red";
  } else {
    number.style.border = "1px solid hsl(270, 3%, 87%)";
  }
}
number.addEventListener("input", NumberCheck);

function NameCheck() {
  let nameregex = /^[a-zA-Z\s]+$/;
  if (!nameregex.test(name.value)) {
    name.style.border = "1px solid red";
  } else {
    name.style.border = "1px solid hsl(270, 3%, 87%)";
  }
}
name.addEventListener("input", NameCheck);

function lenghtNumber() {
  if (number.value.lenght != 16) {
    number.value = number.value.slice(0, 16);
  }
}
number.addEventListener("input", lenghtNumber);

function numbercheckDate() {
  let regexDate = /^[0-9\s]+$/;
  if (!regexDate.test(month.value) || month.value > 12) {
    month.style.border = "1px solid red";
  } else {
    month.style.border = "1px solid hsl(270, 3%, 87%)";
  }
}
month.addEventListener("input", numbercheckDate);

function monthlenghtcheck() {
  if (month.value.lenght != 2) {
    month.value = month.value.slice(0, 2);
  }
}
month.addEventListener("input", monthlenghtcheck);
function checkYear() {
  let regexyear = /^[0-9\s]+$/;
  if (!regexyear.test(year.value) || year.value > 99) {
    year.style.border = "1px solid red";
  } else {
    year.style.border = "1px solid hsl(270, 3%, 87%)";
  }
}
year.addEventListener("input", checkYear);

function checkyearlenght() {
  if (year.value.lenght != 2) {
    year.value = year.value.slice(0, 2);
  }
}
year.addEventListener("input", checkyearlenght);

function checkcvc() {
  let regexcvc = /^[0-9\s]+$/;
  if (!regexcvc.test(cvc.value)) {
    cvc.style.border = "1px solid red";
  } else {
    cvc.style.border = "1px solid hsl(270, 3%, 87%)";
  }
}

cvc.addEventListener("input", checkcvc);
function checkcvclenght() {
  if (cvc.value.lenght != 3) {
    cvc.value = cvc.value.slice(0, 3);
  }
}
cvc.addEventListener("input", checkcvclenght);

function CheckAllInformations() {
  if (
    !regexNumber.test(number.value) ||
    !regexNumber.test(month.value) ||
    !regexNumber.test(year.value) ||
    !regexName.test(name.value) ||
    number.value.lenght != 16 ||
    month.value.lenght > 2 ||
    year.value.lenght > 2 ||
    cvc.value.lenght != 3
  ) {
    alert("You need to correct Some Informations!!");
  } else {
    RightPart.style.display = "none";
    ValidationPart.style.display="block";

  }
}
Submit.addEventListener("click", CheckAllInformations);
continued.addEventListener("click",()=>{
  RightPart.style.display = "block";
  ValidationPart.style.display="none";
});
