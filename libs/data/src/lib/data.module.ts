import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AUTH_FEATURE_KEY, authReducer, authProvider } from './auth';
import { AuthEffects } from './auth/+state/auth.effects';

export interface ModuleOptions {
  authConfig: any;
  authServiceClass: Type<any>;
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [authProvider],
})
export class DataModule {}
