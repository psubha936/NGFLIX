import { Component, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/movie';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() shows: Movie[] = [];
  @Input() title = '';
  @Input() showsType: 'tv' | 'movie' = 'movie';
}
