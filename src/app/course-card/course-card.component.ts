import { Component, OnInit, Input } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"]
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;

  constructor() {}

  ngOnInit() {}

  courseClicked() {
    console.log("course button click");
  }
}
