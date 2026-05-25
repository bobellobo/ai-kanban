import { FeaturesService } from './features.service';
import { GenerateFeatureDto } from './dto/generate-feature.dto';
export declare class FeaturesController {
    private readonly featuresService;
    constructor(featuresService: FeaturesService);
    generate(payload: GenerateFeatureDto): Promise<{
        status: string;
        message: string;
        input: GenerateFeatureDto;
        generatedAt: string;
    }>;
}
