import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isRequiredValidator } from '../validators/isRequiredValidator';
import { rangeDateValidator } from '../validators/rangeDateValidator';

@Component({
  selector: 'app-search-movie-form',
  templateUrl: './search-movie-form.component.html',
  styleUrls: ['./search-movie-form.component.scss']
})
export class SearchMovieFormComponent {

  submitted = false; 
  
  constructor(private fb: FormBuilder) {}

  ngOnInit () {
    this.movieForm.patchValue({
      format: 'courte'
    });
  }

  movieForm = this.fb.group({
    movieTitleOrId: this.fb.group({
      identifiant: ['', isRequiredValidator('title', 'identifiant')],
      title: ['', isRequiredValidator('title', 'identifiant')],
    }, { validators: this.validateTitleOrId }),
    type: ['série', Validators.required],
    releaseDate: ['', rangeDateValidator(1900, 2030)],
    format: ['', Validators.required],
  });

  validateTitleOrId(group: FormGroup) {
    const identifiant = group.get('identifiant')?.value;
    const title = group.get('title')?.value;

    if (!identifiant && !title) {
      return { required: true };
    }

    return null;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.movieForm.value);
  }
}
