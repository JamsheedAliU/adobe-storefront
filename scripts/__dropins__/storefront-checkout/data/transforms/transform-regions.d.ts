<<<<<<< HEAD
import { GetRegionsQuery } from '../../__generated__/types';
import { Region as RegionModel } from '../models/region';
=======
import { Region as RegionModel } from '../models/region';
import { GetRegionsQuery } from '../../__generated__/types';
>>>>>>> template/main

type RegionsCountry = NonNullable<GetRegionsQuery['country']>;
type AvailableRegions = RegionsCountry['available_regions'];
declare const transformRegions: (data: RegionsCountry['available_regions']) => RegionModel[] | undefined;
export { AvailableRegions, transformRegions };
//# sourceMappingURL=transform-regions.d.ts.map