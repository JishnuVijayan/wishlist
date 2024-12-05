import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/wishlist/wishListItem';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  wishList: WishItem[] = [
    new WishItem('Secure a Internship', true),
    new WishItem('Complete Engineering without backlogs', false),
    new WishItem('Secure a good job'),
  ];
  title = 'Wishlist';
  checkBox(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
