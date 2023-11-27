// Nhập địa chỉ email
function handleSubmit() {
  const emailValue = document
    .getElementById("exampleFormControlInput1")
    .value.toLocaleLowerCase();
  const erroEmail = document.getElementById("erro-email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(regex);
  const sectionContent = document.querySelector(".info-hiden");
  const submitControl = document.querySelector("#hiden");
  const textEmail = document.querySelector("#text-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";

    erroEmail.innerHTML = " ";
  } else {
    erroEmail.innerHTML = "Vui lòng nhập đúng email";
    textEmail.style.display = "none";
  }
}

// Ẩn thông tin nghề nghiệp
const workMore1 = document.querySelector(".btn-more-1");
const workLess1 = document.querySelector(".btn-less-1");
const textWork1 = document.querySelector(".work-hiden-1");
function work1() {
  textWork1.style.display = "block";
  workLess1.style.display = "block";
  workMore1.style.display = "none";
}
function hidenWork1() {
  textWork1.style.display = "none";
  workLess1.style.display = "none";
  workMore1.style.display = "block";
}

const workMore2 = document.querySelector(".btn-more-2");
const workLess2 = document.querySelector(".btn-less-2");
const textWork2 = document.querySelector(".work-hiden-2");
function work2() {
  textWork2.style.display = "block";
  workLess2.style.display = "block";
  workMore2.style.display = "none";
}
function hidenWork2() {
  textWork2.style.display = "none";
  workLess2.style.display = "none";
  workMore2.style.display = "block";
}

const workMore3 = document.querySelector(".btn-more-3");
const workLess3 = document.querySelector(".btn-less-3");
const textWork3 = document.querySelector(".work-hiden-3");
function work3() {
  textWork3.style.display = "block";
  workLess3.style.display = "block";
  workMore3.style.display = "none";
}
function hidenWork3() {
  textWork3.style.display = "none";
  workLess3.style.display = "none";
  workMore3.style.display = "block";
}

const workMore4 = document.querySelector(".btn-more-4");
const workLess4 = document.querySelector(".btn-less-4");
const textWork4 = document.querySelector(".work-hiden-4");
function work4() {
  textWork4.style.display = "grid";
  workLess4.style.display = "block";
  workMore4.style.display = "none";
}
function hidenWork4() {
  textWork4.style.display = "none";
  workLess4.style.display = "none";
  workMore4.style.display = "block";
}

const workMore5 = document.querySelector(".btn-more-5");
const workLess5 = document.querySelector(".btn-less-5");
const textWork5 = document.querySelector(".work-hiden-5");
function work5() {
  textWork5.style.display = "block";
  workLess5.style.display = "block";
  workMore5.style.display = "none";
}
function hidenWork5() {
  textWork5.style.display = "none";
  workLess5.style.display = "none";
  workMore5.style.display = "block";
}

const workMore6 = document.querySelector(".btn-more-6");
const workLess6 = document.querySelector(".btn-less-6");
const textWork6 = document.querySelector(".work-hiden-6");
function work6() {
  textWork6.style.display = "block";
  workLess6.style.display = "block";
  workMore6.style.display = "none";
}
function hidenWork6() {
  textWork6.style.display = "none";
  workLess6.style.display = "none";
  workMore6.style.display = "block";
}

// Hover chuột
textWork1.style.display = "none";
function mouseOver1(element) {
  if (textWork1.style.display == "none") {
    workMore1.style.display = "block";
    workLess1.style.display = "none";
  } else {
    workMore1.style.display = "none";
    workLess1.style.display = "block";
  }
}
function mouseOut1(element) {
  if (textWork1.style.display != "none") {
    workMore1.style.display = "none";
    workLess1.style.display = "none";
  } else {
    workMore1.style.display = "none";
    workLess1.style.display = "none";
  }
}

textWork2.style.display = "none";
function mouseOver2(element) {
  if (textWork2.style.display == "none") {
    workMore2.style.display = "block";
    workLess2.style.display = "none";
  } else {
    workMore2.style.display = "none";
    workLess2.style.display = "block";
  }
}
function mouseOut2(element) {
  if (textWork2.style.display != "none") {
    workMore2.style.display = "none";
    workLess2.style.display = "none";
  } else {
    workMore2.style.display = "none";
    workLess2.style.display = "none";
  }
}

textWork3.style.display = "none";
function mouseOver3(element) {
  if (textWork3.style.display == "none") {
    workMore3.style.display = "block";
    workLess3.style.display = "none";
  } else {
    workMore3.style.display = "none";
    workLess3.style.display = "block";
  }
}
function mouseOut3(element) {
  if (textWork3.style.display != "none") {
    workMore3.style.display = "none";
    workLess3.style.display = "none";
  } else {
    workMore3.style.display = "none";
    workLess3.style.display = "none";
  }
}

textWork4.style.display = "none";
function mouseOver4(element) {
  if (textWork4.style.display == "none") {
    workMore4.style.display = "block";
    workLess4.style.display = "none";
  } else {
    workMore4.style.display = "none";
    workLess4.style.display = "block";
  }
}
function mouseOut4(element) {
  if (textWork4.style.display != "none") {
    workMore4.style.display = "none";
    workLess4.style.display = "none";
  } else {
    workMore4.style.display = "none";
    workLess4.style.display = "none";
  }
}

textWork5.style.display = "none";
function mouseOver5(element) {
  if (textWork5.style.display == "none") {
    workMore5.style.display = "block";
    workLess5.style.display = "none";
  } else {
    workMore5.style.display = "none";
    workLess5.style.display = "block";
  }
}
function mouseOut5(element) {
  if (textWork5.style.display != "none") {
    workMore5.style.display = "none";
    workLess5.style.display = "none";
  } else {
    workMore5.style.display = "none";
    workLess5.style.display = "none";
  }
}

textWork6.style.display = "none";
function mouseOver6(element) {
  if (textWork6.style.display == "none") {
    workMore6.style.display = "block";
    workLess6.style.display = "none";
  } else {
    workMore6.style.display = "none";
    workLess6.style.display = "block";
  }
}
function mouseOut6(element) {
  if (textWork6.style.display != "none") {
    workMore6.style.display = "none";
    workLess6.style.display = "none";
  } else {
    workMore6.style.display = "none";
    workLess6.style.display = "none";
  }
}
