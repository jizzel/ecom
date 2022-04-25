import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineOrdersComponent } from './mine-orders.component';

describe('MineOrdersComponent', () => {
  let component: MineOrdersComponent;
  let fixture: ComponentFixture<MineOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
