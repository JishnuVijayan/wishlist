import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/wishlist/wishListItem';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'add-wish-form',
  imports: [
    MatFormField,
    FormsModule,
    MatLabel,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';
  addNewWish() {
    if (this.newWishText.trim()) {
      // this.wishList.push(new WishItem(this.newWishText));
      this.addWish.emit(new WishItem(this.newWishText));
      this.newWishText = '';
      document.querySelector<HTMLInputElement>(
        'input[name="new-wish-text"]'
      )!.value = '';
    }
  }
}
