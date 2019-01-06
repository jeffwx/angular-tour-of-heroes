import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  // Registering the provider
  // 在根注入器中把 HeroService 注册为该服务的提供商，以便在别处可以注入它
  providedIn: 'root'
})
export class HeroService {
  // 这是一个典型的“服务中的服务”场景：
  // MessageService 被注入到了 HeroService 中，
  // 而 HeroService 又被注入到了 HeroesComponent 中。
  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch Heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
