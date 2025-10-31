import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegPort } from './seg-port';

describe('SegPort', () => {
  let component: SegPort;
  let fixture: ComponentFixture<SegPort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegPort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegPort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
