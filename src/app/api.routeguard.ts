import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {  ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

export const canActivate: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    const cookieService = inject(CookieService);

    const sessionKey = cookieService.get('sessionKey');
    const needsLogin = next.data['needsLogin'] ?? false;
    const needsLogout = next.data['needsLogout'] ?? false;

    //If you need a login, but aren't, route to Login
    if (needsLogin && !sessionKey) {
        router.navigate(['/login']);
        return false;
    }

    //If you need to be logged out, but are, route to Home
    if (needsLogout && sessionKey) {
        router.navigate(['/']);
        return false;
    }

    //Didn't hit a break, allow navigation
    return true;
};