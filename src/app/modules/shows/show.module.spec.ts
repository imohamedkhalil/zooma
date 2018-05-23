import { ShowModule } from './show.module';

describe('ShowModule', () => {
  let showModule: ShowModule;

  beforeEach(() => {
    showModule = new ShowModule();
  });

  it('should create an instance', () => {
    expect(showModule).toBeTruthy();
  });
});
