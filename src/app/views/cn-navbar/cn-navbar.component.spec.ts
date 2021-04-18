import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnNavbarComponent } from './cn-navbar.component';

describe('CnNavbarComponent', () => {
  let component: CnNavbarComponent;
  let fixture: ComponentFixture<CnNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
