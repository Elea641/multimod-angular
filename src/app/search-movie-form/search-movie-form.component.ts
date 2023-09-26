import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-movie-form',
  templateUrl: './search-movie-form.component.html',
  styleUrls: ['./search-movie-form.component.scss']
})
export class SearchMovieFormComponent {

  constructor(private fb: FormBuilder){}

  movieForm  = this.fb.group({
  movieTitleOrId: this.fb.group({
    identifiant: [''],
    title: [''],
  }),
  type: [''],
  releaseDate: [''],
  form: [''],
});

onSubmit() {
  console.log(this.movieForm.value);
}
}
