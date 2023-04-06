import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregisterpageComponent } from './userregisterpage.component';

describe('UserregisterpageComponent', () => {
  let component: UserregisterpageComponent;
  let fixture: ComponentFixture<UserregisterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserregisterpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserregisterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
