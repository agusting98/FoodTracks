import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodPaysComponent } from './method-pays.component';

describe('MethodPaysComponent', () => {
  let component: MethodPaysComponent;
  let fixture: ComponentFixture<MethodPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodPaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
