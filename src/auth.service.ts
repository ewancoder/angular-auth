import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoggerService } from '@ewancoder/angular-logger';

@Injectable()
export class AuthService {
    private readonly token: BehaviorSubject<string>;

    constructor(private readonly logger: LoggerService) {
        let token = localStorage.getItem('token');

        this.token = new BehaviorSubject<string>(token ? token : '');

        logger.log('Initialized AuthService.', ['auth', 'service', 'init']);
    }

    get token$(): Observable<string> {
        return this.token.asObservable();
    }

    get isLoggedIn$(): Observable<boolean> {
        return this.token$.map(t => !!t);
    }

    clearToken(): void {
        localStorage.removeItem('token');
        this.token.next('');

        this.logger.log('Auth token cleared.', ['auth', 'service']);
    }

    setToken(token: string): void {
        localStorage.setItem('token', token);
        this.token.next(token);

        this.logger.log('Auth token set.', ['auth', 'service']);
    }
}
