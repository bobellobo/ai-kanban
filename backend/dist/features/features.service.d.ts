import { GenerateFeatureDto } from './dto/generate-feature.dto';
export declare class FeaturesService {
    generateFeature(payload: GenerateFeatureDto): {
        status: string;
        message: string;
        input: GenerateFeatureDto;
        generatedAt: string;
    };
}
