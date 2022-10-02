import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnidadesDeMedidaRutinaPage } from './unidades-de-medida-rutina.page';

describe('UnidadesDeMedidaRutinaPage', () => {
  let component: UnidadesDeMedidaRutinaPage;
  let fixture: ComponentFixture<UnidadesDeMedidaRutinaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesDeMedidaRutinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadesDeMedidaRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
