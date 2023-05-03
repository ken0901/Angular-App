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
import { AlertComponet } from './shared/alert/alert.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        DropdownDirective,
        ShortenPipe,
        FilterPipe,
        ReversePipe,
        SortPipe,
        HttpAppComponent,
        AuthComponent,
        LoadingSpinnerComponent,
        AlertComponet,
        PlaceholderDirective
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RecipesModule
       
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
