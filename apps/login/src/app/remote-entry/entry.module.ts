import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import { RemoteEntryComponent } from './entry.component';
import { LoginComponent } from '../login/login.component';
import { UiModule } from '@mfe/ui';

@NgModule({
  declarations: [RemoteEntryComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
