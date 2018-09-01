import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipbarComponent } from './tipbar.component';

describe('TipbarComponent', () => {
  let component: TipbarComponent;
  let fixture: ComponentFixture<TipbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
