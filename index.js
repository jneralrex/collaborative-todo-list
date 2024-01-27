 $(document).ready(function(){
 const taskBoard = $("#taskBoard");

  //>>>show category modal function<<<
  $(".create-category-btn").click(function () {
    $(".categoryModal").show();
  });
  //>>><<<

  //>>>Cancel category button section<<<
  $(".cancel-category-btn").click(function (event) {
    event.preventDefault();

    $(".categoryModal").hide();

    taskForm.trigger("reset");
  });
  //>>><<<

  //>>>category form and category holder section<<<
  const categoryCreatingForm = $("#categoryCreatingForm");

  $(".add-category-btn").click(function (event) {
    event.preventDefault();

    const categorySection = $(".categorySection");

    const categoryTitle = $("#categoryTitle").val();

    const categoryPinner = $(`<div class="category-display-board"></div>`);

    categoryPinner.html(`<div class="category-name-and-action" id="categoryNameSection">
    <p class="category-name" id="categoryName">${categoryTitle}</p>
    
    <div class="btn-holder">
    <button class="category-edit-btn category-action-btn"><img src="./images/icons8-edit-32.png" alt="" class="images"></button>
    <button class="category-delete-btn category-action-btn"><img src="./images/icons8-delete-24 (1).png" alt="" class="images"></button>
    </div>
    </div>`);

    categorySection.append(categoryPinner);

    const categorySectionTwo = $(".categorySectionTwo");

    const categoryPinnerTwo = $(
      ` 
      <option class="">
      ${categoryTitle}
    </option>
      `
    );
    categorySectionTwo.append(categoryPinnerTwo);

    $(".categoryModal").hide();

    categoryCreatingForm.trigger("reset");

    //>>>Category edit section<<<
    $(document).on("click", ".category-edit-btn", function () {
      event.preventDefault();

      let categoryNameSection = $(this).closest(".category-name-and-action");

      let categoryName = categoryNameSection.find("#categoryName").text();

      $("#newCategoryTitle").val(categoryName);

      $(".updateCategoryModal").show();

      $(".updateCategoryModal").data(
        "categoryNameSection",
        categoryNameSection
      );
    });
    //>>>New Category handling section<<<

    const newCategoryForm = $("#newCategoryForm");

    $("#newCategoryForm").submit(function (event) {
      event.preventDefault();

      let newCategoryTitle = $("#newCategoryTitle").val();

      let categoryNameSection = $(".updateCategoryModal").data(
        "categoryNameSection"
      );

      categoryNameSection.find("#categoryName").text(newCategoryTitle);

      $(".updateCategoryModal").hide();

      taskForm.trigger("reset");
    });

    $(".category-update-cancel-btn").click(function () {
      $(".updateCategoryModal").hide();

      newCategoryForm.trigger("reset");
    });

    $(document).on("click", ".category-delete-btn", function () {
      $(this).closest(".category-display-board").remove();
    });
  });
  //>>> <<<

  //>>>Task adder section<<<

  $(".task-adder").click(function () {
    $(".modal").show();
  });
  //>>><<<

  //task form and task holder section

  const taskForm = $("#taskForm");

  $(".add-btn").click(function (event) {
    event.preventDefault();

    const taskBoard = $("#taskBoard");

    const titleBox = $("#titleBox").val();

    const taskDescription = $("#taskDescription").val();

    const taskPinner = $(`<div class="task-display-board"></div>`);

    taskPinner.html(`<div class="task-holder" id="taskHolder">

     <div class="task-title-and-option-bar">

      <p class="task-title" id="taskTitle">${titleBox}</p>

      <div><button class="edit-btn action-btn" id="editBtn"><img src="./images/icons8-edit-32.png" alt="" class="images"></button><button class="delete-btn action-btn" id="deleteBtn"><img src="./images/icons8-delete-24 (1).png" alt="" class="images"></button></div>

     </div>

     <div class="task-details" id="taskDetails">${taskDescription}</div>

      <div class="category-color-and-task-marker">

        <div class="task-marker-section">

          <label for=""><input type="checkbox" name="done" id="taskMarker" 
          class="task-marker">Done</label>

        </div>

      </div>

    </div>`);

    taskBoard.append(taskPinner);

    $(".modal").hide();

    taskForm.trigger("reset");

    //>>>delete task section<<<

    $(document).on("click", ".delete-btn", function () {
      $(this).closest(".task-holder").remove();
    });
    //>>><<<

    //Edit task section

    $(document).on("click", ".edit-btn", function () {
      let taskHolder = $(this).closest(".task-holder");

      let title = taskHolder.find("#taskTitle").text();

      let description = taskHolder.find("#taskDetails").text();

      $("#newTitleBox").val(title);

      $("#newtaskDescription").val(description);

      $(".update-modal").show();

      $(".update-modal").data("taskHolder", taskHolder);
    });

    //>>>Task edit section<<<

    const newTaskForm = $("#newTaskForm");

    $("#newTaskForm").submit(function (event) {
      event.preventDefault();

      let newTitle = $("#newTitleBox").val();

      let newDescription = $("#newtaskDescription").val();

      let taskHolder = $(".update-modal").data("taskHolder");

      taskHolder.find("#taskTitle").text(newTitle);

      taskHolder.find("#taskDetails").text(newDescription);

      $(".update-modal").hide();

      taskForm.trigger("reset");
    });

    $(".modal-update-cancel-btn").click(function (event) {
      event.preventDefault();

      $(".update-modal").hide();

      newTaskForm.trigger("reset");
    });

    //cancel button section

    $(".cancel-btn").click(function (event) {
      event.preventDefault();

      $(".modal").hide();
    });
  });

  //task maker section

  $(document).on("click", ".task-marker", function () {
    let taskHolder = $(this).closest(".task-holder");

    if ($(this).prop("checked")) {
      taskHolder
        .find(".task-title, .task-details")
        .css("text-decoration", "line-through");
    } else {
      taskHolder
        .find(".task-title, .task-details")
        .css("text-decoration", "none");
    }
  });

  //  task hider section

  function hideDoneTask() {
    const taskHider = $("#taskHider");
    const taskMarker = $("#taskMarker");
    const taskHolder = $("#taskHolder");

    if (taskMarker.prop("checked") && taskHider.prop("checked")) {
      taskHolder.css("display", "none");
    } else {
      taskHolder.show();
    }
  }

  $("#taskHider").click(function () {
    hideDoneTask();
  })


   $("#signUpBtn").click(function (event) {
     event.preventDefault();
     let name = $("#userName").val();
     let email = $("#email").val();
     let password = $("#password").val();

     if (name == "") {
       let nameError = document.getElementById("nameError");
       nameError.textContent = "field cannot be empty";
       nameError.style.color = "red";
       error = true;
       return false;
     } else if (name.length <= 2) {
       let nameError = document.getElementById("nameError");
       nameError.textContent = "Length too small";
       nameError.style.color = "red";
       error = true;
       return false;
     } else {
       let nameError = document.getElementById("nameError");
       nameError.textContent = "good";
       nameError.style.color = "green";
       error = false;
     }
     if (email == "") {
       let emailError = document.getElementById("emailError");
       emailError.textContent = "email field cannot be empty";
       emailError.style.color = "red";
       error = true;
       return false;
     } else if (
       email.indexOf("@") < 1 ||
       email.indexOf("@") > email.length - 5
     ) {
       let emailError = document.getElementById("emailError");
       emailError.textContent = "@ is required";
       emailError.style.color = "red";
       error = true;
       return false;
     } else {
       let emailError = document.getElementById("emailError");
       emailError.textContent = "good";
       emailError.style.color = "green";
       error = false;
     }

     let userDetails = {
       name: name,
       email: email,
       password: password,
     };

     $.ajax({
       url: "http://todo.reworkstaging.name.ng/v1/users",
       method: "POST",
       contentType: "application/json",
       data: JSON.stringify(userDetails),
       success: function (response) {
         console.log("User registration successful:", response);
         alert("Your registration is successful!");
       },
       error: function (error) {
         console.log("Registration error:", error);
         alert("Registration Error.");
       },
     });

     $("form")[0].reset();
   });

   $("#loginBtn").click(function (event) {
     event.preventDefault();
     let email = $("#email").val();
     let password = $("#password").val();

     if (email == "") {
       let emailError = document.getElementById("emailError");
       emailError.textContent = "email field cannot be empty";
       emailError.style.color = "red";
       error = true;
       return false;
     } else if (email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
       let emailError = document.getElementById("emailError");
       emailError.textContent = "@ is required";
       emailError.style.color = "red";
       error = true;
       return false;
     } else {
       let emailError = document.getElementById("emailError");
       emailError.textContent = "good";
       emailError.style.color = "green";
       error = false;
     }

     let userDetails = {
       email: email,
       password: password,
     };

     $.ajax({
       url: "http://todo.reworkstaging.name.ng/v1/users/login",
       method: "POST",
       contentType: "application/json",
       data: JSON.stringify(userDetails),
       success: function (feedback) {
         console.log("Login response:", feedback);

         if (feedback.code == 404 || feedback.type == 'NOT_EXISTS') {
           alert("Sorry, your username or password is incorrect.");
          } else {
            alert("Login successful");
              window.location.href = "index.html";
         }
       },
       error: function (error) {
         console.log("Login error:", error);
         alert("Login Error.");
       },
     });

     $("form")[0].reset();
   });
});
