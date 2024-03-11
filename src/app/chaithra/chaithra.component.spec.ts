import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaithraComponent } from './chaithra.component';

describe('ChaithraComponent', () => {
  let component: ChaithraComponent;
  let fixture: ComponentFixture<ChaithraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaithraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaithraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
