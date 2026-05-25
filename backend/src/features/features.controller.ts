import { Body, Controller, Post } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { GenerateFeatureDto } from './dto/generate-feature.dto';

@Controller('api/features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Post('generate')
  async generate(@Body() payload: GenerateFeatureDto) {
    return this.featuresService.generateFeature(payload);
  }
}