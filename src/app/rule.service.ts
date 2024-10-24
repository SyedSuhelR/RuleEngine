import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuleService {


  private apiUrl = 'http://localhost:8080/api/rules/create'; // Adjust based on your backend URL
  private apiUrlc = 'http://your-api-url/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  createRule(ruleString: string): Observable<any> {
    return this.http.post(this.apiUrl, { ruleString });
  }

 

   // Method to combine rules
   combineRules(rules: string[]): Observable<Node> {
    return this.http.post<Node>(`${this.apiUrlc}/combine`, rules);
  }

  // Method to fetch existing rules
  fetchRules(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/rules`); // Adjust API endpoint as necessary
  }
}
