import { Injectable } from '@nestjs/common';
import { GenerateFeatureDto } from './dto/generate-feature.dto';

@Injectable()
export class FeaturesService {
  generateFeature(payload: GenerateFeatureDto) {
    return {
      status: 'stub',
      message: 'Feature generation logic has not been implemented yet.',
      input: payload,
      generatedAt: new Date().toISOString(),
    };
  }
}
