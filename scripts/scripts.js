<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<script>
function toggleBox(header) {
  // Use jQuery to find the associated container and toggle its visibility
  $(header).next('.dd-box').slideToggle();
  $(header).next('.ddm-box').slideToggle();
}
</script>


<script>
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

</script>





