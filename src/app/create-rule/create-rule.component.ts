import { Component } from '@angular/core';
import { RuleService } from '../rule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrl: './create-rule.component.css'
})
export class CreateRuleComponent {
  ruleString: string = '';
  response: any;
  message: string = '';

  constructor(private ruleService: RuleService,private router: Router) {}

  createRule() {
    this.ruleService.createRule(this.ruleString).subscribe(
      (res) => {
        this.message = 'Rule added successfully!'; // Success message
        this.ruleString = ''; // Clear the input field

        setTimeout(() => {
          this.router.navigate(['/rule-list']); // Navigate to the rule-list page
        }, 2000); // Adjust the delay as needed (2000 ms = 2 seconds)
      },

    
      (error) => {
        this.message = 'Rule not added. Please try again.'; // Failure message
        console.error('Error creating rule:', error);
      }
    );
  }
}
