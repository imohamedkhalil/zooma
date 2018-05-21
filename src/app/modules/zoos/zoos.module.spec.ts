import { ZoosModule } from './zoos.module';

describe('ZoosModule', () => {
  let zoosModule: ZoosModule;

  beforeEach(() => {
    zoosModule = new ZoosModule();
  });

  it('should create an instance', () => {
    expect(zoosModule).toBeTruthy();
  });
});
