import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailAboutComponent } from './people-detail-about.component';

describe('PeopleDetailAboutComponent', () => {
  let component: PeopleDetailAboutComponent;
  let fixture: ComponentFixture<PeopleDetailAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleDetailAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
