// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3")

var span1 = document.getElementById("firstClose")
var span2 = document.getElementById("secondClose")
var span3 = document.getElementById("thirdClose")


// Get the button that opens the modal
var img = document.getElementById("image1");
var img2 = document.getElementById("image2")
var txt = document.getElementById("inProgress")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
img.onclick = function() {
  modal.style.display = "block";
}

img2.onclick = function() {
    modal2.style.display = "block";
  }

txt.onclick = function() {
    modal3.style.display = "block";
  }



// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
  }

span3.onclick = function() {
    modal3.style.display = "none";
  }





// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }

window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }