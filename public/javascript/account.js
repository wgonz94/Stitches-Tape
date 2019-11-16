let user = "Devyn";
let email = "ckbrogue@gmail.com";
let phone = "714-858-8131";
let table = [];
$(document).ready(() => {
var currentURL = window.location.origin;

  $.get(currentURL + "/api/measurement/" + (Math.floor(Math.random() * 10) + 1), function(data) {

    if (data.length === 0 ){
      console.log("You have no client measurements.");
      $.get(currentURL + "/api/user/11", function(response) {
        console.log(response);
        $(".user-name").append("<b>Welcome Back " + response.username + "</b>");

        let html = `<tr>
        <td>You have no client measurements.</td>
        </tr>`;
  
        $(".project-table").append(html);
      });
    } else {
      console.log(data);
      console.log(data[0].Measurements.length);
      $(".user-name").append("<b>Welcome Back " + data[0].username + "</b>");
  
      for (let i = 0; i < data[0].Measurements.length; i++) {
        let html = `<tr>
        <td>${data[0].Measurements[i].clientName}</td>
        <td>${data[0].Measurements[i].projectName}</td>
        <td><a data-target="measurement-table" class='z-depth-3 btn modal-trigger'>Measurements</a></td>
        </tr>`;
      
        $(".project-table").append(html);
      }
    }

    return data;
  });
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

// for (let i = 0; i < table.length; i++) {
//   let html = `<tr>
//   <td>${table[i].clientName}</td>
//   <td>${table[i].projectName}</td>
//   <td><a data-target="measurement-table" class='z-depth-3 btn modal-trigger'>${table[i].measureLink}</a></td>
//   </tr>`;

//   $(".project-table").append(html);
// }

let size = "32 1/4";
// Test Code
$("#handedness").attr("value", size);
$("#email-mt").attr("value", email);
$("#phone-mt").attr("value", phone);

$(".modal-content").on("click", ".print", () => {
  $(".printable").html($("#measurement-table").html());
  window.print();
});
