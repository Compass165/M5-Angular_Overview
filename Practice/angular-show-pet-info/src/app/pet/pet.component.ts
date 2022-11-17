import { Component,OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit{

  pet: Pet = {
    name: 'Lương',
    image: 'https://afamilycdn.com/150157425591193600/2020/10/8/907948531242050125116577197025703760494592o-16021471734931283888690.jpg'
  }

  constructor() {
  }

  ngOnInit() {
  }

}
