import { Component } from '@angular/core';
import { InitComponent } from './components/init/init.component';
import { MethodPaysComponent } from './components/method-pays/method-pays.component';
import { OffertsComponent } from './components/offerts/offerts.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-home',
  imports: [InitComponent, MethodPaysComponent, OffertsComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
