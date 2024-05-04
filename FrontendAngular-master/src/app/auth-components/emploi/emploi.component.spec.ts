import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiComponent } from './emploi.component';
import { beforeEach, describe, it } from 'node:test';

describe('EmploiComponent', () => {
  let component: EmploiComponent;
  let fixture: ComponentFixture<EmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmploiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
