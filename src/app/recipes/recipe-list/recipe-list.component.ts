import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply a Test',
      'https://images-gmi-pmc.edge-generalmills.com/7eb09e32-fb06-4a34-97e6-def91b62164f.jpg'),
    new RecipeModel('A Test Recipe', 'This is simply a Test',
      'https://images-gmi-pmc.edge-generalmills.com/7eb09e32-fb06-4a34-97e6-def91b62164f.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
