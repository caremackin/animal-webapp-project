import { OnInit, Component } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Observable, of } from 'rxjs';


@Component( {
    selector: 'app-animal-selector',
    templateUrl: './animal-selector.component.html',
    styleUrls: ['./animal-selector.component.css']
})


export class AnimalCreateComponent implements OnInit{
  public animals: Observable<any> = of([])
  public id: number = 1;

  constructor(private animalsService: AnimalsService){}

  ngOnInit(){
    this.animals = this.animalsService.getAnimals()
    this.animals.subscribe(animals => {
      console.log(animals)
    }, err => {
      console.log(err)
    })
  }

  public resetAnimal(){
    this.id = 1;    
  }
}
