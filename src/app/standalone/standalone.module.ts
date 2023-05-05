import { NgModule } from '@angular/core';

import { HighlightDirective } from './shared/highlight.directive';
import { DetailsComponent } from './welcome/details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
      HighlightDirective,
      DetailsComponent,
      WelcomeComponent,
  ],
  exports: [HighlightDirective],
})
export class StandAloneModule {}
