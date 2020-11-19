import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSchemeComponent } from './url-scheme.component';

describe('UrlSchemeComponent', () => {
  let component: UrlSchemeComponent;
  let fixture: ComponentFixture<UrlSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrlSchemeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
