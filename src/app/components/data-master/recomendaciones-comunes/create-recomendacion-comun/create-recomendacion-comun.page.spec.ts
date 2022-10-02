import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateRecomendacionComunPage } from './create-recomendacion-comun.page';

describe('CreateRecomendacionComunPage', () => {
  let component: CreateRecomendacionComunPage;
  let fixture: ComponentFixture<CreateRecomendacionComunPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecomendacionComunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRecomendacionComunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
