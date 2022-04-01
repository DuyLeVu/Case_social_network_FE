import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailFriendsComponent } from './people-detail-friends.component';

describe('PeopleDetailFriendsComponent', () => {
  let component: PeopleDetailFriendsComponent;
  let fixture: ComponentFixture<PeopleDetailFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleDetailFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
