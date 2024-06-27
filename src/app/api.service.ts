import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class ApiService{
    constructor(private http: HttpClient){
        
    }
    //Test getter
    get(){
        return this.http.get('http://localhost:3000/api/test');
    }
    //Get account information (change to checkAccountInfo later)
    getAccountInfo(id:number){
        return this.http.get("http://localhost:3000/api/getAccountData", {params: new HttpParams().set("id", id)});
    }

    checkAccount(info: any){

    }

    putAccount(){
        
    }

}