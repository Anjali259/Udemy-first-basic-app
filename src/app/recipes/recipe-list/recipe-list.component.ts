import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe('First Recipe', 'This is simply tes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13CSrvNsQJSHdzyPn_rRXkFfMH1zE_xHVEdz0eEvO_gmafx5NLA'),
  new Recipe('Second Recipe', 'This is simply tes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOyZEPhv6kg6METpWaNoya61o_TCSQNxsHQ5G0cDNdlZPLgbSSw')


  ];
  constructor() { }

  ngOnInit() {
  }

}
