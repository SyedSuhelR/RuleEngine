import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRulesDialogComponent } from './no-rules-dialog.component';

describe('NoRulesDialogComponent', () => {
  let component: NoRulesDialogComponent;
  let fixture: ComponentFixture<NoRulesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoRulesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoRulesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
