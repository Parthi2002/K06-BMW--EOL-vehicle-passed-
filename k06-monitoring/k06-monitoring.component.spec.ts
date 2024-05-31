import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { K06MonitoringComponent } from './k06-monitoring.component';

describe('K06MonitoringComponent', () => {
  let component: K06MonitoringComponent;
  let fixture: ComponentFixture<K06MonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ K06MonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(K06MonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
