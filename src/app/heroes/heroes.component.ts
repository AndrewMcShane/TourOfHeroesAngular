import { Component, OnInit } from '@angular/core';
import { Hero }              from '../hero';
import { HEROES }            from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero : Hero;

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

  heroes = HEROES;

  constructor() { }
  //a good place to put initialization logic (akin to the Start() method in Unity C# code.).
  ngOnInit() {
  }

}
