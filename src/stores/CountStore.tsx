import { action, makeObservable, observable } from "mobx";

export class CountStore {
  @observable
  public counts: number[] = [];

  public constructor() {
    makeObservable(this);
  }

  @action
  public addCount(count: number): void {
    this.counts = [...this.counts, count];
  }

  @action
  public clearCounts(): void {
    this.counts = [];
  }
}
