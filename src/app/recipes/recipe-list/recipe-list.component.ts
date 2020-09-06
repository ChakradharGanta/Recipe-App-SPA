import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'this is simply a test', `https://upload.wikimedia.org/wikipedia/com
    mons/1/15/Recipe_logo.jpeg`),
    new Recipe('a test recipe', 'this is simply a test', `https://upload.wikimedia.org/wikipedia/com
    mons/1/15/Recipe_logo.jpeg`)
  ];// array of Recipe

  constructor() { }

  ngOnInit(): void {
  }

}
