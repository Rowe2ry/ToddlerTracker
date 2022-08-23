import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'; // get the interface we made
import { TASKS } from '../../mock-tasks'; // import the data, (would be an API call in full production app)

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS; // now our component has data and it can be referenced in the HTML template

  constructor() { }

  ngOnInit(): void {
  }

}
