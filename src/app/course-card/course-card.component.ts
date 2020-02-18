import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"]
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Input() index: number;
  @Output() courseSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  courseClicked() {
    console.log("course button click");
    this.courseSelected.emit(this.course);
  }
}
