import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [RegistroComponent, LoginComponent],
  imports: [CommonModule],
})
export class AuthModule {}
