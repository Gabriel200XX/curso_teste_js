import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ServiceTestService } from './service-test.service';
import { ServiceTestServiceFakeMock } from './mocks/ServiceTestServiceFakeMock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ServiceTestService, userClass: ServiceTestServiceFakeMock }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    spyOn(component, 'met').and.callFake(() => { });
    component.ola();
    expect(component.title).toEqual('1');
    expect(component.met).toHaveBeenCalled();
  }));

  it('', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ServiceTestService);
    spyOn(service, 'example').and.callThrough();
    component.met();
    tick();
    expect(component.title).toEqual('3');
    expect(service.example).toHaveBeenCalledWith('3');
    expect(component.title).toEqual('abc');
  }));

  it('', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    component['metPrivate']();
    expect(component.title).toEqual('5');
  });

});
