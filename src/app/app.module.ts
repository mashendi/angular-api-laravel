import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductformComponent } from './components/productform/productform.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: ProductformComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    ProductformComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
