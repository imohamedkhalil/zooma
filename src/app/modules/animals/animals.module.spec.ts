import { AnimalsModule } from './animals.module';

describe('AnimalsModule', () => {
  let animalsModule: AnimalsModule;

  beforeEach(() => {
    animalsModule = new AnimalsModule();
  });

  it('should create an instance', () => {
    expect(animalsModule).toBeTruthy();
  });
});
