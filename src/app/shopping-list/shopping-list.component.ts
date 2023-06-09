import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients !: Ingredient[];
  private igChangeSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService,
              private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog('Hello from ShoppingListComponent ngOninit');
  }

  ngOnDestory(): void{
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

}
