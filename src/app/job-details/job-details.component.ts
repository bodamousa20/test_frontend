import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-job-details',
  standalone:true,
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
