let user = "Devyn";
let email = "ckbrogue@gmail.com";
let phone = "714-858-8131";
let table = [];
$(document).ready(() => {
  $(".user-name").append("<b>Welcome Back " + user + "</b>");
});

const accounts = [
  {
    clientName: "Devyn",
    projectName: "Shirt",
    measureLink: "Measurements"
  },
  {
    clientName: "Vanessa",
    projectName: "Dress",
    measureLink: "Measurements"
  },
  {
    clientName: "Emily",
    projectName: "Pants",
    measureLink: "Measurements"
  },
  {
    clientName: "Vanessa",
    projectName: "Dress",
    measureLink: "Measurements"
  }
];

const entries = Object.values(accounts);

for (const value of entries) {
  table.push(value);
}

for (let i = 0; i < table.length; i++) {
  let html = `<tr>
  <td>${table[i].clientName}</td>
  <td>${table[i].projectName}</td>
  <td><a data-target="measurement-table" class='z-depth-3 btn modal-trigger'>${table[i].measureLink}</a></td>
  </tr>`;

  $(".project-table").append(html);
}

let size = "32 1/4";
// Test Code
$("#handedness").attr("value", size);
$("#email-mt").attr("value", email);
$("#phone-mt").attr("value", phone);

$(".modal-content").on("click", ".print", () => {
  $(".printable").html($("#measurement-table").html());
  window.print();
});
