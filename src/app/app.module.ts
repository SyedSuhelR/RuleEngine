import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRuleComponent } from './create-rule/create-rule.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RuleCombineComponent } from './rule-combine/rule-combine.component';
import { NoRulesDialogComponent } from './no-rules-dialog/no-rules-dialog.component';
import { RuleEvaluateComponent } from './rule-evaluate/rule-evaluate.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRuleComponent,
    NoRulesDialogComponent,
    NoRulesDialogComponent,
    RuleCombineComponent,
    RuleEvaluateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
