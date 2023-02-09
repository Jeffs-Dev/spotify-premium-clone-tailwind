import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyGoPremiumComponent } from './why-go-premium.component';

describe('WhyGoPremiumComponent', () => {
  let component: WhyGoPremiumComponent;
  let fixture: ComponentFixture<WhyGoPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyGoPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyGoPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
