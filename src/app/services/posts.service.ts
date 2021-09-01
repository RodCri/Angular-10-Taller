import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseURL: string;

  constructor(private http: HttpClient) { 
    this.baseURL = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll(): Promise<any[]>{
    return this.http.get<any[]>(this.baseURL).toPromise();
  }

  getById(pId:number): Promise<any>{
    return this.http.get<any>(`${this.baseURL}/${pId}`).toPromise();
  }

  newPost({title, body, userId}): Promise<any>{
    const bodyRequest = {title, body,userId};

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json; charset=UTF-8'
      })
    }
    return this.http.post<any>(this.baseURL,bodyRequest,httpOptions).toPromise();
  }

  updatePost({id, title, body, userId}): Promise<any>{
    return this.http.put<any>(`${this.baseURL}/${id}`,{id,title,body,userId}).toPromise();
  }

  deletePost(pId): Promise<any>{
    return this.http.delete<any>(`${this.baseURL}/${pId}`).toPromise();

  }
}
