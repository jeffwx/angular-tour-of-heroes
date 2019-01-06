import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

// ActivatedRoute 保存着到这个 HeroDetailComponent 实例的路由信息。 这个组件对从 URL 中提取的路由参数感兴趣。
// 其中的 id 参数就是要显示的英雄的 id。
// HeroService 从远端服务器获取英雄数据，本组件将使用它来获取要显示的英雄。
// location 是一个 Angular 的服务，用来与浏览器打交道。使用它来导航回上一个视图。
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
