const curriculumCourses = document.querySelectorAll(
  ".curriculum-course__panel"
);

const curriculumCourseToggleBtn = document.querySelector(
  ".curriculum-course__toggle-btn"
);

let pannelActiveCount = 1;
const curriculumCourseCount = curriculumCourses.length;

curriculumCourses.forEach((course) => {
  course.onclick = function () {
    if (this.classList.contains("panel-active")) {
      this.classList.remove("panel-active");
      pannelActiveCount--;
      if (pannelActiveCount == 0)
        curriculumCourseToggleBtn.innerHTML = "Mở rộng tất cả";
    } else {
      this.classList.add("panel-active");
      pannelActiveCount++;
      if (pannelActiveCount == curriculumCourseCount)
        curriculumCourseToggleBtn.innerHTML = "Thu nhỏ tất cả";
    }
    console.log(pannelActiveCount);
  };
});

curriculumCourseToggleBtn.onclick = () => {
  if (curriculumCourseToggleBtn.innerHTML == "Mở rộng tất cả") {
    curriculumCourses.forEach((course) => {
      if (!course.classList.contains("panel-active"))
        course.classList.add("panel-active");
    });
    pannelActiveCount = curriculumCourseCount;
    curriculumCourseToggleBtn.innerHTML = "Thu nhỏ tất cả";
  } else {
    curriculumCourses.forEach((course) => {
      if (course.classList.contains("panel-active"))
        course.classList.remove("panel-active");
    });
    pannelActiveCount = 0;
    curriculumCourseToggleBtn.innerHTML = "Mở rộng tất cả";
  }
};
