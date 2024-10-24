import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-no-rules-dialog',
  templateUrl: './no-rules-dialog.component.html',

  template: `
  <h2 mat-dialog-title>No Rules Found</h2>
  <mat-dialog-content>
    <p>{{ data.message }}</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="close()">Close</button>
  </mat-dialog-actions>
`
  ,
  styleUrl: './no-rules-dialog.component.css'
})
export class NoRulesDialogComponent {
  constructor( ) {}

}
