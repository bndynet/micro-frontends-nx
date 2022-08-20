import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WelcomeComponent, LogoComponent],
  exports: [
    WelcomeComponent,
    LogoComponent,
  ],
})
export class UiModule {}
