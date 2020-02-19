import { Component, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses = COURSES;

  @ViewChild(CourseCardComponent, { static: false })
  courseCard: CourseCardComponent;

  onCourseSelected(course) {
    console.log("course in app");
    console.log(this.courseCard);
  }
}
