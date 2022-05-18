var bookmarkName = document.getElementById("siteName");
var bookmarkUrl = document.getElementById("siteUrl");

var bookmarkList;

if (localStorage.getItem("bookmarkList") != null) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  display();
} else {
  bookmarkList = [];
}

function addBookmark() {
  if (urlValidation() == true) {
    var bookmark = {
      name: bookmarkName.value,
      url: editUrl()
    };

    bookmarkList.push(bookmark);
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    display();
    clear() ;
  } else {
    alert("invalid url");
  }
}

function display() {
  var x = ``;
  for (var i = 0; i < bookmarkList.length; i++) {
    x +=
      `
        <tr>
            <td>${i + 1}</td>
            <td> ${bookmarkList[i].name} </td>
            <td><a  href="` +
      bookmarkList[i].url +
      `" target="_blank" class="btn btn-primary">Visit</a></td>
            <td><button onclick="deleteItem(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `;
  }
  document.getElementById("tdata").innerHTML = x;
}

function clear() {
  bookmarkName.value = "";
  bookmarkUrl.value = "";
}

function deleteItem(x) {
  bookmarkList.splice(x, 1);
  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  display();
}

function urlValidation() {
  var regex =
    /^((https:\/\/)|(www\.)){0,2}([a-z]|[0-9]){3,}(\.com)\/{0,1}.{0,}$/;
  if (regex.test(bookmarkUrl.value) == true) {
    return true ; 
  } else {
    return false;
  }
}
function editUrl() {
  var regex = /^(https:\/\/)/;

  if (regex.test(bookmarkUrl.value) == false) {
    return "https://" + bookmarkUrl.value;
  }
  else{
      return bookmarkUrl.value ; 
  }
  
}
