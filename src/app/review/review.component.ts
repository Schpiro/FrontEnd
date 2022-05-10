import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Review } from './review-model';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() reviews: Review[];

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const code = params.get('code');
        return this.reviewService.getReviewsByHardwareCode(code);
      }
      )
    ).subscribe((review: Review[]) => {
      this.reviews = review;
    });
  }

}
