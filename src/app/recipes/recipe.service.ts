import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Big Fat Hamburger',
    'What else you need to say?',
    `https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg`,
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1),
    ]),
    new Recipe('Tasty Schnitzel',
    'A super tasty Schinitzel',
    `https://realfood.tesco.com/media/images/RFO-1400x919-Chicken-schnitzel-with-Kiev-mash-42b5800b-0647-4c08-a579-7248dd3d7b01-0-1400x919.jpg`,
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipe(){
    return this.recipes.slice();//a new copy of array is returned
  }

  addIngToList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
