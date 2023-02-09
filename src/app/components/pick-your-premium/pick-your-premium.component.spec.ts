import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickYourPremiumComponent } from './pick-your-premium.component';

describe('PickYourPremiumComponent', () => {
  let component: PickYourPremiumComponent;
  let fixture: ComponentFixture<PickYourPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickYourPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickYourPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
