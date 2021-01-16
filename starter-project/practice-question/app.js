const courseInput = document.querySelector("#input-course");
const ratingInput = document.querySelector("#input-rating");
const courseList = document.querySelector("#course-list");
const addBtn = document.querySelector("#btn-add");

addBtn.addEventListener("click", () => {
  const enteredCourse = courseInput.value;
  const enteredRating = ratingInput.value;
  if (
    enteredCourse.trim().length <= 0 ||
    enteredRating <= 0 ||
    enteredRating > 5
  ) {
    const alert = document.createElement("ion-alert");
    alert.header = "Invalid Inputs";
    alert.message = "Please enter valid course and rating!";
    alert.buttons = ["Okay"];
    document.body.appendChild(alert);
    alert.present();
    return;
  }

  const newCourse = document.createElement("ion-item");
  newCourse.innerHTML = `<strong>${enteredCourse}:</strong>&nbsp;${enteredRating}/5`;

  courseList.appendChild(newCourse);
});
