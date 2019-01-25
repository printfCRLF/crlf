export class PnL {
  constructor(
    public upl: number,
    public rpl: number
  ) {
    this.upl = upl;
    this.rpl = rpl;
  }

  public tpl(): number {
    return this.upl + this.rpl;
  }
}
