import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.modle";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:'root'})
export class DataStorageService {
    baseUrl = 'https://ng-course-recipe-book-ffdd6-default-rtdb.firebaseio.com/recipes.json';

    constructor(private http: HttpClient,
                private recipeService: RecipeService){}

    storeRecipes(){
        const recipes =this.recipeService.getRecipes();
        return this.http.put(this.baseUrl, recipes)
            .subscribe(response => {
                console.log(response);
            });
    }
}
