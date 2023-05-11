import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { HeaderComponent } from './header/header/header.component';
import { SharedModule } from './shared/shared.module';
import { PostComponent } from './offline/post/post.component';
import { UserComponent } from './testing/user/user.component';
import { ReverseTestingPipe } from './testing/reverseTesting.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PostComponent,
        UserComponent,
        ReverseTestingPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        BrowserAnimationsModule  
        // StandAloneModule,
    ],
    bootstrap: [AppComponent],
    // entryComponents: [ -- Angular 9 or higher it could omit.
    //     AlertComponet
    // ]
})
export class AppModule {
}
