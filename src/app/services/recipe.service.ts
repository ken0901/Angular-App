import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.modle';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
          'A Test recipe',
          'This is simply a test',
          'assets/images/recipe_icon.jpg',
          [new Ingredient('Meat', 1), 
          new Ingredient('French Fries', 20)]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();
  
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]){
    this.shoppingListService.addIngredients(ingredient);
  }
}
