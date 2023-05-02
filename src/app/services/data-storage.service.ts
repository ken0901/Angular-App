import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class DataStorageService {
    baseUrl = 'https://ng-course-recipe-book-ffdd6-default-rtdb.firebaseio.com/recipes.json';

    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService){}

    storeRecipes(){
        const recipes =this.recipeService.getRecipes();
        return this.http.put(this.baseUrl, recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>
            (this.baseUrl)
            .pipe(
                map(recipes =>{
                    return recipes.map(recipe => {
                        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                    });
                }),
                tap(recipes => {
                this.recipeService.setRecipes(recipes);
            }));
    }
}
