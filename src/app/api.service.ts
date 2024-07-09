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
    checkAccount(username: string, password: string){
        return this.http.get("http://localhost:3000/api/checkAccountData", {params: new HttpParams().set("username", username).set("password", password)});
    }
    //Attempt to create a new account
    postAccount(username: string, password: string, email: string){
        return this.http.post("http://localhost:3000/api/postAccountData", {params: new HttpParams().set("email", email).set("username", username).set("password", password)});
    }

}