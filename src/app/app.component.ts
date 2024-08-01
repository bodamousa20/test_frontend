import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobDetailsComponent } from './job-details/job-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, JobDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo from styleUrl to styleUrls
})
export class AppComponent {
  title = 'job-listing';
}
