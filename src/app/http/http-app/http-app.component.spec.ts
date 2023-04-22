import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAppComponent } from './http-app.component';

describe('HttpAppComponent', () => {
  let component: HttpAppComponent;
  let fixture: ComponentFixture<HttpAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
