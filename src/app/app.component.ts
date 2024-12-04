import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/wishlist/wishListItem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  wishList = [
    new WishItem('Secure a Internship', true),
    new WishItem('Complete Engineering without backlogs', false),
    new WishItem('Secure a good job'),
  ];
  title = 'wishlist';
}
