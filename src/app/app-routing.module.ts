import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { HotComponent } from './hot/hot.component';
import { ColdComponent } from './cold/cold.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'loggedin', component: LoggedinComponent },
  { path: 'hot', component: HotComponent },
  { path: 'cold', component: ColdComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },

  // { path: 'auth', component: AuthService },
  // { path: 'authlogin', component: AuthloginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
