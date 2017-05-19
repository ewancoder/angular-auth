import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerModule } from '@ewancoder/angular-logger';
import { AuthService } from './auth.service';

@NgModule({
    imports: [ LoggerModule ]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                AuthService,
                ...LoggerModule.forRoot().providers
            ]
        }
    }
}
