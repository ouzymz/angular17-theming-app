import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoostrapCardComponent } from './boostrap-card.component';

describe('BoostrapCardComponent', () => {
  let component: BoostrapCardComponent;
  let fixture: ComponentFixture<BoostrapCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoostrapCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoostrapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
