import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {  ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";

export  const canActivate: CanActivateFn = (
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ) =>{
        return true;
    };