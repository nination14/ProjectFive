/****************************************
Project 5- Public API Requests 
Coder Name- Ahirina Rivera 
Start- 08/06/2019
End- 08/09/2019
*****************************************/

let info; //Variable that holds the info for each of the 12 random employee's
let employee; //Variable that holds the employee personal info 
let url = 'https://randomuser.me/api/?results=12&nat=us,nz,au,ca,tr'; //Variable to hold URL

function getEmployee() { // 12 random users are pulled from the API
                         // New random employee information displays each time the page refreshes
  fetch(url)
    .then(response => response.json())
    .then(function (info) {             //The directory displays 12 users from the Random User API, and includes the personal info for each user.
      theEmployee = info.results

      theEmployee.forEach(employee => {
        let picture = employee.picture.large
        let firstName = employee.name.first
        let lastName = employee.name.last
        let email = employee.email
        let state = employee.location.state
        let city = employee.location.city


        const employeeDirectory =
          `<div class="card"><div class="card-img-container">
            <img class="card-img" src=${picture} alt="profile picture">
            </div>
            <div class="card-info-container">
            <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
            <p class="card-text">${email}</p>
            <p class="card-text cap">${city}, ${state}</p>
            </div>`
        $("#gallery").append(employeeDirectory);
      });

    });

};
getEmployee(); //Calling the function

$('#gallery').on('click', ".card", function () { //Event listener to display model when click on profile
  i = ($(this).index());
  modalDisplay(i);
});

function searchBox() { //Display search bar but does not work
  let search =
    `<form action="#" method="get">
          <input type="search" id="search-input" class="search-input" placeholder="Search...">
          <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
       </form>`;


  $(".search-container").append(search);
};
searchBox();


// Modal Window

function modalDisplay(i) { //Displays the random users info in the Modal Window
  $('body').append( //appeding it to the body to have it shown in the webpage
    `<div class="modal-container">
          <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn">X</button>
          <div class="modal-info-container">
              <img class="modal-img" src="${theEmployee[i].picture.large}" alt="Employee Picture">
              <h3 id="name" class="modal-name cap">${theEmployee[i].name.first}, ${theEmployee[i].name.last}</h3>
              <p class="modal-text">${theEmployee[i].email}</p>
              <p class="modal-text cap">${theEmployee[i].location.city}</p>
          <hr> 
          <p class="modal-text">Cell: ${theEmployee[i].cell}</p>
          <p class="modal-text">Phone: ${theEmployee[i].phone}</p>
          <p class="modal-text cap">Address: ${theEmployee[i].location.street}, ${theEmployee[i].location.city}, 
          <p ${theEmployee[i].location.state}, ${theEmployee[i].location.postcode}</p>
          <p class="modal-text">Birthday: ${theEmployee[i].dob.date.slice(5, 7) + '/' + theEmployee[i].dob.date.slice(8, 10) + '/' + theEmployee[i].dob.date.slice(0, 4)}</p>
      </div>
      <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
      </div>`)

  $('#modal-close-btn').on('click', function () { //Event listener to close the Modal
    $('.modal-container').remove();
  });
};