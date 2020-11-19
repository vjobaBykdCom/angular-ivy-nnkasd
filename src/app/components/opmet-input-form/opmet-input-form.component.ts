import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { OpmetData } from '../../opmet-interface';

@Component({
  selector: 'app-opmet-input-form',
  templateUrl: './opmet-input-form.component.html',
  styleUrls: ['./opmet-input-form.component.scss'],
})
export class OpmetInputFormComponent implements OnInit {
  submitted = false;
  @Input() loading = false;
  @Output() data = new EventEmitter<OpmetData>();

  form = new FormGroup(
    {
      messages: new FormControl('', [Validators.required]),
      airports: new FormControl('', [
        Validators.pattern('[A-Za-z]{4}( [A-Za-z]{4})*'),
      ]),
      countries: new FormControl('', [
        Validators.pattern('[A-Za-z]{2}( [A-Za-z]{2})*'),
      ]),
    },
    [this.requiredFormFields()]
  );

  messageTypeList = [
    { value: 'METAR', message: 'METAR' },
    { value: 'TAF', message: 'TAF' },
    { value: 'SIGMET', message: 'SIGMET' },
  ];

  constructor() {}

  ngOnInit(): void {}

  toUpperCase(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectionStart = input.selectionStart;
    const selectionEnd = input.selectionEnd;
    input.value = input.value.toUpperCase();
    input.selectionStart = selectionStart;
    input.selectionEnd = selectionEnd;
  }

  requiredFormFields(): ValidatorFn {
    return (form: FormGroup): { [key: string]: any } => {
      if (form.controls.airports.value || form.controls.countries.value) {
        return null;
      }
      return { requiredformfield: true };
    };
  }

  submit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const value: OpmetData = {
        reportTypes: this.form.controls.messages.value,
      };
      if (this.form.controls.airports.value) {
        value.stations = this.form.controls.airports.value
          .toUpperCase()
          .split(' ');
      }
      if (this.form.controls.countries.value) {
        value.countries = this.form.controls.countries.value
          .toUpperCase()
          .split(' ');
      }
      this.data.emit(value);
    }
  }
}
