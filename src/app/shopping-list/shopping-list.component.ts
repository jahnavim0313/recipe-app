import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  ingredients:Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("tomatoes",10),
  ];
}
