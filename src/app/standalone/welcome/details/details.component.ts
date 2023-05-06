import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/standalone/shared/analytics.service';
import { StandAloneModule } from '../../standalone.module';

@Component({
  standalone: true,
  // imports:[StandAloneModule],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}