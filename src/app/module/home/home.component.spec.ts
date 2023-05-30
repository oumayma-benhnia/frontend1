import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentTs } from './home.component';

describe('HomeComponentTs', () => {
  let component: HomeComponentTs;
  let fixture: ComponentFixture<HomeComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentTs ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
