import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsTreeComponent } from './components-tree.component';

describe('ComponentsTreeComponent', () => {
  let component: ComponentsTreeComponent;
  let fixture: ComponentFixture<ComponentsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
