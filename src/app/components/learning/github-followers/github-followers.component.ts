import { combineLatest, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    combineLatest([
      this._route.paramMap,
      this._route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      console.log(id)
      console.log(page)
    })
  }

}
