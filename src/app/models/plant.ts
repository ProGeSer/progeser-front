import {PlantStage} from './plant-stage';
import {Resource} from './resource';
import {Expose, Type} from 'class-transformer';

export class Plant implements Resource {
  static exampleData: Plant[] = [
    {
      id: 1,
      name: 'Rose',
      stages: PlantStage.exampleData
    },
    {
      id: 2,
      name: 'Petunia',
      stages: PlantStage.exampleData
    },
    {
      id: 3,
      name: 'Orchidée',
      stages: PlantStage.exampleData
    }
  ];

  id: number;
  name: string;

  @Expose({ name: 'plantStages' })
  @Type(() => PlantStage)
  stages: PlantStage[] = [];
}
