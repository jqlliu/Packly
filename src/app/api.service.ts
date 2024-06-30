import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class ApiService{
    constructor(private http: HttpClient){
        
    }
    //Get account information to display in my account
    getAccountInfo(id:number){
        return this.http.get("http://localhost:3000/api/getAccountData", {params: new HttpParams().set("id", id)});
    }
    //Check account information and return a session id (for authentication)
    checkAccount(info: any){
        
    }
    //Attempt to create a new account
    putAccount(info: any){
        
    }

}