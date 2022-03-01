import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstctsListComponent } from './constcts-list.component';

describe('ConstctsListComponent', () => {
  let component: ConstctsListComponent;
  let fixture: ComponentFixture<ConstctsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstctsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstctsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
