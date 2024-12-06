import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/wishlist/wishListItem';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {
  MatButtonToggleGroup,
  MatButtonToggle,
} from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    WishListComponent,
    AddWishFormComponent,
  ],
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

  filterText: String = '1';

  get visibleItems(): WishItem[] {
    let value = this.filterText;
    if (value === '1') {
      return this.wishList;
    } else if (value === '2') {
      return this.wishList.filter((item) => item.isComplete);
    } else {
      return this.wishList.filter((item) => !item.isComplete);
    }
  }
}
