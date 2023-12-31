import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  recipes: Recipe[] = [
    new Recipe('test','thid is test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('test','thid is another test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
  ];
}
