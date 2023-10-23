import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartComponent } from './depth_chart.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

describe('DepthChartComponent', () => {
  let component: DepthChartComponent;
  let fixture: ComponentFixture<DepthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ DepthChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
