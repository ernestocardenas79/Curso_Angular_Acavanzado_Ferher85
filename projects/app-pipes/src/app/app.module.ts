import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeES from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeES);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, VentasModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}