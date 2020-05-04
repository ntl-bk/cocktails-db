import { Component, OnInit, Input } from '@angular/core';
import {CocktailModel} from '../../models/cocktail.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() cocktail: CocktailModel;
  ngOnInit() {}
}
