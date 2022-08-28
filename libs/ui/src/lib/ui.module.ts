import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataModule } from '@mfe/data';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menu/menuitem.component';
import { ErrorComponent, LockedComponent, NotfoundComponent } from './pages';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [CommonModule, RouterModule, DataModule],
  declarations: [
    WelcomeComponent,
    LogoComponent,
    MenuComponent,
    MenuitemComponent,
    ErrorComponent,
    NotfoundComponent,
    LockedComponent,
  ],
  exports: [
    WelcomeComponent,
    LogoComponent,
    MenuComponent,
    MenuitemComponent,
    ErrorComponent,
    NotfoundComponent,
    LockedComponent,
  ],
})
export class UiModule {}
