import { provideRouter, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
    { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
    { path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent }
];

export const appRouting = provideRouter(routes);
