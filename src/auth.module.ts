import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from './auth.service';

@NgModule({})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [ AuthService ]
        }
    }
}
