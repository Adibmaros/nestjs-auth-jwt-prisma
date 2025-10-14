import { Test, TestingModule } from '@nestjs/testing';
import { CobaController } from './coba.controller';
import { CobaService } from './coba.service';

describe('CobaController', () => {
  let controller: CobaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CobaController],
      providers: [CobaService],
    }).compile();

    controller = module.get<CobaController>(CobaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
