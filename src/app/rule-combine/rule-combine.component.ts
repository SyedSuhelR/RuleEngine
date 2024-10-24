import { Component } from '@angular/core';
import { RuleService } from '../rule.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rule-combine',
  templateUrl: './rule-combine.component.html',
  styleUrl: './rule-combine.component.css'
})
export class RuleCombineComponent {

  rules: any[] = [];
  message: string = '';
  isSuccess: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRules();
  }

  fetchRules() {
    // Fetch rules from the API
    this.http.get<any[]>('http://localhost:8080/api/rules/all').subscribe(
      (data) => {
        this.rules = data;
      },
      (error) => {
        console.error('Error fetching rules', error);
      }
    );
  }

  combineRules() {
    const selectedRules = this.rules.filter(rule => rule.selected);
    
    if (selectedRules.length > 0) {
      // Combine the selected rules using your API
      this.http.post('http://localhost:8080/api/rules/combine', selectedRules).subscribe(
        (response) => {
          this.message = 'Rules combined successfully!';
          this.isSuccess = true;
        },
        (error) => {
          this.message = 'Failed to combine rules.';
          this.isSuccess = false;
        }
      );
    }
  }

  isAnyRuleSelected() {
    return this.rules.some(rule => rule.selected);
  }
}
