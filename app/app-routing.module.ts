import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './componenet/product/product.component';
import { CartComponent } from './componenet/cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
