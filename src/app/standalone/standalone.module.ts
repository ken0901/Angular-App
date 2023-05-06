import { NgModule } from '@angular/core';

import { DetailsComponent } from './welcome/details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { StandAloneSharedModule } from './shared/stand-alone-shared.module';

@NgModule({
  declarations: [
      WelcomeComponent,
  ],
  imports:[
    BrowserModule,
    StandAloneSharedModule,
    DetailsComponent,
  ],
  exports: [
    WelcomeComponent
  ],
})
export class StandAloneModule {}
