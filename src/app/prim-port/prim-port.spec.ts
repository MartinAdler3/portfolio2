import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimPort } from './prim-port';

describe('PrimPort', () => {
  let component: PrimPort;
  let fixture: ComponentFixture<PrimPort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimPort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimPort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
