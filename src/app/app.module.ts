import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { CoreModule } from './core.module';
import { HeaderComponent } from './header/header/header.component';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListroutingModule } from './shopping-list/shopping-list-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RecipesRoutingModule,
        HttpClientModule,
        RecipesModule,
        ShoppingListModule,
        ShoppingListroutingModule,
        SharedModule,
        CoreModule,
        AuthModule,
    ],
    bootstrap: [AppComponent],
    // entryComponents: [ -- Angular 9 or higher it could omit.
    //     AlertComponet
    // ]
})
export class AppModule {
}
