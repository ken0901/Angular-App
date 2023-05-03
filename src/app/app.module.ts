import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth/auth/auth-interceptor.service';
import { AuthComponent } from './auth/auth/auth.component';
import { HeaderComponent } from './header/header/header.component';
import { HttpAppComponent } from './http/http-app/http-app.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ReversePipe } from './pipe/reverse.pipe';
import { ShortenPipe } from './pipe/shorten.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListroutingModule } from './shopping-list/shopping-list-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShortenPipe,
        FilterPipe,
        ReversePipe,
        SortPipe,
        HttpAppComponent,
        AuthComponent,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RecipesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RecipesModule,
        ShoppingListModule,
        ShoppingListroutingModule,
        SharedModule
       
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
        // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
        // {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
    ],
    bootstrap: [AppComponent],
    // entryComponents: [ -- Angular 9 or higher it could omit.
    //     AlertComponet
    // ]
})
export class AppModule {
}
