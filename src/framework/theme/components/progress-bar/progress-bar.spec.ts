import { NbProgressBarComponent } from './progress-bar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Component: NbProgressBar', () => {

  let progressBar: NbProgressBarComponent;
  let fixture: ComponentFixture<NbProgressBarComponent>;
  let testContainerEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbProgressBarComponent],
    });

    fixture = TestBed.createComponent(NbProgressBarComponent);
    progressBar = fixture.componentInstance;
    testContainerEl = fixture.elementRef.nativeElement;
  });

  it('Setting value 50 should set width to 50%', () => {
    progressBar.value = 50;
    fixture.detectChanges();
    expect(
      fixture
        .debugElement
        .query(By.css('.progress-value')).nativeElement.style.width)
      .toBe('50%');
  });

  it('Setting type danger should set class danger', () => {
    progressBar.type = 'danger';
    fixture.detectChanges();
    expect(
      fixture
        .debugElement
        .query(By.css('.progress-value')).nativeElement.classList.contains('danger'))
      .toBeTruthy()
  });

  it('Setting size sm should set class sm', () => {
    progressBar.size = 'sm';
    fixture.detectChanges();
    expect(
      fixture
        .debugElement
        .query(By.css('.progress-container')).nativeElement.classList.contains('sm'))
      .toBeTruthy()
  });

  it('Setting displayValue should create span with value label', () => {
    progressBar.value = 40;
    progressBar.displayValue = true;
    fixture.detectChanges();
    expect(
      fixture
        .debugElement
        .query(By.css('.progress-value span')).nativeElement.innerHTML)
      .toContain('40%')
  });

});
