import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WelcomeComponent, LogoComponent],
  exports: [WelcomeComponent, LogoComponent],
})
export class UiModule {}
