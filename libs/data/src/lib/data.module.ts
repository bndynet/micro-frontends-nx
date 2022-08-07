import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AUTH_FEATURE_KEY, authReducer } from './auth';
import { AuthEffects } from './auth/+state/auth.effects';

export interface ModuleOptions {}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class DataModule {
  static forRoot(options?: ModuleOptions): ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
    };
  }
}
