import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rule-evaluate',
  templateUrl: './rule-evaluate.component.html',
  styleUrl: './rule-evaluate.component.css'
})
export class RuleEvaluateComponent {

  ast: any = ''; // Variable to hold the AST input
  userData: any = {}; // Variable to hold the user data input
  result: boolean | null = null; // Variable to hold the result of the evaluation
  message: string = ''; // Message to display any status updates

  constructor(private http: HttpClient) {}

  evaluateRule() {
    const requestData = {
      ast: this.ast,
      userData: this.userData
    };

    this.http.post<boolean>('http://localhost:8080/api/rules/evaluate', requestData)
      .subscribe(
        (response) => {
          this.result = response; // Set result to response
          this.message = 'Evaluation successful!';
        },
        (error) => {
          console.error('Error evaluating rule:', error);
          this.message = 'Failed to evaluate rule.';
          this.result = null;
        }
      );
  }
}
