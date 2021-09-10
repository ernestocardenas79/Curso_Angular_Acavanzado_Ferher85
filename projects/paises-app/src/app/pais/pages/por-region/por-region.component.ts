import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'cn-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button { margin-right:5px;}` ]
})
export class PorRegionComponent  {
  
  regiones= ['africa','americas','asia','europe','oceania']
  regionActiva :string
  paises:Country[]=[]
  constructor(private paisService: PaisService) {}

  activarRegion(region:string){
    if(region === this.regionActiva) return;
    
    this.regionActiva = region;
    this.paises =[]

    this.paisService.buscarRegion(region).subscribe(paises=> this.paises= paises)
  }

  getClaseCss(region:string):string{
    return (region === this.regionActiva)
            ?'btn btn-primary'
            :'btn btn-outline-primary'
  }
}
