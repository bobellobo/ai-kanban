import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { GenerateFeatureDto } from './dto/generate-feature.dto';

@Controller('api/features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get('hello')
  getHello() {
    return { message: 'Hello World from features' };
  }

  @Post('generate')
  generate(@Body() payload: GenerateFeatureDto) {
    return this.featuresService.generateFeature(payload);
  }
}
