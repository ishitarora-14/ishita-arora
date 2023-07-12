// change headings on image hover 
console.log(document.getElementById("project1"));

function projectName () {
    var name =
    document.getElementById("project1").value;
    var message = "hello" + name;

document
    .getElementById("project_name")
    .innerHTML = message;

if (name === "project2") {
    var title = 
    document
        .querySelector("#project_name")
        .textContent;
        title = "correct";
        document
            .querySelector("#project_name")
            .textContent = title;
      }
    }

// DOM manipulation
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

