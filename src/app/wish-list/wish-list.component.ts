import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCheckbox } from '@angular/material/checkbox';
import { WishItem } from '../../shared/wishlist/wishListItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [MatCheckboxModule, MatCheckbox, CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
  checkBox(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
