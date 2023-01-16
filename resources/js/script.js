// Dynamic field 

$(document).ready(function () {
    var max_fields = 4; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
  
    var x = 1; //initlal text box count
    $(add_button).click(function (e) {
      //on add input button click
      e.preventDefault();
      if (x < max_fields) {
        //max input box allowed
        x++; //text box increment
        $(wrapper).append(
          '<div class="social-dropdown"> <select name="myselect[' +
            x +
            ']"><option>Facebook</option><option>Instagram</option><option>Linkedin</option><option>Youtube</option></select> <input type="text"> <a href="#" class="remove_field"><i class="fa-solid fa-circle-xmark"></i></a></div>'
        ); // add input boxes.
      }
    });
  
    $(wrapper).on("click", ".remove_field", function (e) {
      //user click on remove text
      e.preventDefault();
      $(this).parent("div").remove();
      x--;
    });
  });

//   Dynamic field JS End 

// popup form contact

const popup = document.querySelector(".popup");
function showPopup() {
  popup.classList.add('open');
}
function hidePopup() {
  popup.classList.remove('open');
}
// popup form contact
const popup2 = document.querySelector('.feedback-pop');
function showPopup2() {
  popup2.classList.add('open');
}
function hidePopup2() {
  popup2.classList.remove('open');
}

// action button open & close 
 
const action_open = document.querySelector('.list-container');
function action_btn_toggle() {
  action_open.classList.toggle('active');
}
function action_btn_off() {
  action_open.classList.remove('active');
}




$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


