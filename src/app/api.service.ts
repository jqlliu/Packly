import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Form } from "@angular/forms";


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
    //Authenticate User, and attempt to return a session key
    authenticateLogin(username: string, password: string){
        return this.http.get("http://localhost:3000/api/getAuthenticateUser", {params: new HttpParams().set("username", username).set("password", password)});
    }
    //Check account information and return a session id (for authentication)
    checkAccount(username: string, password: string){
        return this.http.get("http://localhost:3000/api/checkAccountData", {params: new HttpParams().set("username", username).set("password", password)});
    }
    //Attempt to create a new account
    postAccount(fd: any){
        return this.http.post("http://localhost:3000/api/postAccountData", fd);
    }

}