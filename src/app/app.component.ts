import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/wishlist/wishListItem';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatLabel,
    MatFormField,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  wishList: WishItem[] = [
    // new WishItem('Secure a Internship', true),
    // new WishItem('Complete Engineering without backlogs', false),
    // new WishItem('Secure a good job'),
  ];
  title = 'Wishlist';
  checkBox(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  newWishText = '';
  addNewWish() {
    if (this.newWishText.trim()) {
      this.wishList.push(new WishItem(this.newWishText));
      this.newWishText = '';
      document.querySelector<HTMLInputElement>(
        'input[name="new-wish-text"]'
      )!.value = '';
    }
  }
}
