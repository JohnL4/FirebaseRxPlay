import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOpsComponent } from './session-ops.component';

describe('SessionOpsComponent', () => {
  let component: SessionOpsComponent;
  let fixture: ComponentFixture<SessionOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
