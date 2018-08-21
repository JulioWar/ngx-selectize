import {
  Component,
  OnInit,
  forwardRef, Input, ContentChildren, QueryList, AfterViewInit, ViewChild, ElementRef, NgZone
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {NgxSelectizeOptionDirective} from './subcomponents/ngx-selectize-option.directive';

export interface SelectizeConfigs {
  delimiter?: string;
  splitOn?: any;
  persist?: boolean;
  diacritics?: boolean;
  create?: boolean;
  createOnBlur?: boolean;
  createFilter?: any;
  highlight?: boolean;
  openOnFocus?: boolean;
  maxOptions?: number;
  maxItems?: any;
  hideSelected?: any;
  addPrecedence?: boolean;
  selectOnTab?: boolean;
  preload?: boolean;
  allowEmptyOption?: boolean;
  closeAfterSelect?: boolean;
  scrollDuration?: number;
  loadThrottle?: number;
  loadingClass?: string;
  dataAttr?: string;
  optgroupField?: string;
  valueField?: string;
  labelField?: string;
  disabledField?: string;
  optgroupLabelField?: string;
  optgroupValueField?: string;
  lockOptgroupOrder?: boolean;
  sortField?: string;
  searchField?: string[];
  searchConjunction?: string;
  mode?: any;
  wrapperClass?: string;
  inputClass?: string;
  dropdownClass?: string;
  dropdownContentClass?: string;
  dropdownParent?: any;
  copyClassesToDropdown?: boolean;
}

const callback = () => {
};

const CUSTOM_INPUT: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxSelectizeComponent),
  multi: true
};

@Component({
  selector: 'lib-ngx-selectize',
  providers: [CUSTOM_INPUT],
  template: `
    <div class="selectize-control single" #selectize>
      <div class="selectize-input items focus input-active has-options dropdown-active">
        <input type="select-one"
               #input
               autocomplete="off"
               tabindex=""
               id="select-beast-selectized"
               placeholder="Select a person..." >
      </div>
      <div class="selectize-dropdown single" #dropdown style="width: 100%">
        <div class="selectize-dropdown-content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class NgxSelectizeComponent implements AfterViewInit, OnInit, ControlValueAccessor {

  private _onTouchedCallback: () => void = callback;
  private _onChangeCallback: (_: any) => void = callback;

  @Input() delimiter: string = ',';
  @ViewChild('selectize') selectize: ElementRef;
  @ViewChild('input') input: ElementRef;
  @ViewChild('dropdown') dropdown: ElementRef;
  @ContentChildren(NgxSelectizeOptionDirective) options: QueryList<NgxSelectizeOptionDirective>;
  private configs: SelectizeConfigs = {

    delimiter: ',',
    splitOn: null, // regexp or string for splitting up values from a paste command
    persist: true,
    diacritics: true,
    create: false,
    createOnBlur: false,
    createFilter: null,
    highlight: true,
    openOnFocus: true,
    maxOptions: 1000,
    maxItems: null,
    hideSelected: null,
    addPrecedence: false,
    selectOnTab: false,
    preload: false,
    allowEmptyOption: false,
    closeAfterSelect: false,

    scrollDuration: 60,
    loadThrottle: 300,
    loadingClass: 'loading',

    dataAttr: 'data-data',
    optgroupField: 'optgroup',
    valueField: 'value',
    labelField: 'text',
    disabledField: 'disabled',
    optgroupLabelField: 'label',
    optgroupValueField: 'value',
    lockOptgroupOrder: false,

    sortField: '$order',
    searchField: ['text'],
    searchConjunction: 'and',

    mode: null,
    wrapperClass: 'selectize-control',
    inputClass: 'selectize-input',
    dropdownClass: 'selectize-dropdown',
    dropdownContentClass: 'selectize-dropdown-content',

    dropdownParent: null,

    copyClassesToDropdown: true,
  };

  private $selectize(): any  {
    return this.selectize.nativeElement;
  }

  private $input(): any {
    return this.input.nativeElement;
  }

  private $dropdown(): any {
    return this.input.nativeElement;
  }


  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    this.options.forEach((item) => {
      console.log(item);
    });
    setTimeout(() => {
      this.ngZone.run(() => {
        this.$dropdown().style.width = this.$selectize().offsetWidth;
      });
    });
  }

  ngOnInit() {
  }

  writeValue(value: number) {
    this._onChangeCallback(value);
  }

  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }
}
