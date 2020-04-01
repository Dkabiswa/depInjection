import { injectable } from 'inversify'

@injectable()
export class DependencyA {
  private readonly name: string = 'dependency A'

  public getName(): string {
    return this.name;
  }
}
 
@injectable()
export class DependencyB {
  private readonly name: string = 'dependency B'

  public getName(): string {
    return this.name;
  }
}