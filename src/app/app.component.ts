import { Component, ViewChild, ElementRef } from "@angular/core";
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

  @ViewChild("coursesElem", { static: false })
  coursesElem: ElementRef;

  @ViewChild(CourseCardComponent, { read: ElementRef, static: false })
  courseCardElem: ElementRef;

  onCourseSelected(course) {
    console.log("elem", this.courseCardElem);
  }
}
