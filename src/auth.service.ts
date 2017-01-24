import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    private readonly token: BehaviorSubject<string>;

    constructor() {
        let token = localStorage.getItem('token');

        this.token = new BehaviorSubject<string>(token ? token : '');
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
    }

    setToken(token: string): void {
        localStorage.setItem('token', token);
        this.token.next(token);
    }
}
