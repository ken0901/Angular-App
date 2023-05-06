import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { DetailsComponent } from './welcome/details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
  ],
  imports:[
    BrowserModule,
    // StandAloneSharedModule,
    DetailsComponent,
    WelcomeComponent
  ],
  exports: [
    WelcomeComponent
  ],
})
export class StandAloneModule {}
