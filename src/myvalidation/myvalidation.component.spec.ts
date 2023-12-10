import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvalidationComponent } from './myvalidation.component';

describe('MyvalidationComponent', () => {
  let component: MyvalidationComponent;
  let fixture: ComponentFixture<MyvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyvalidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
