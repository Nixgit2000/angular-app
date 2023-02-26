import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtemplateComponent } from './newtemplate.component';

describe('NewtemplateComponent', () => {
  let component: NewtemplateComponent;
  let fixture: ComponentFixture<NewtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
