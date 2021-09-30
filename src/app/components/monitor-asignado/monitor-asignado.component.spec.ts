import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorAsignadoComponent } from './monitor-asignado.component';

describe('MonitorAsignadoComponent', () => {
  let component: MonitorAsignadoComponent;
  let fixture: ComponentFixture<MonitorAsignadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorAsignadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
