import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { ReversePipe } from './pipe/reverse.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { HttpAppComponent } from './http/http-app/http-app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        DropdownDirective,
        RecipeStartComponent,
        RecipeEditComponent,
        ShortenPipe,
        FilterPipe,
        ReversePipe,
        SortPipe,
        HttpAppComponent
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
       
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
