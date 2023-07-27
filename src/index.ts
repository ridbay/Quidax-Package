import User from './features/user';
import Wallets from './features/wallets';
import Market from './features/market';
import Orders from './features/orders';
import Withdrawals from './features/withdrawals';

class Quidax {
  user: User;

  wallets: Wallets;

  market: Market;

  orders: Orders;

  withdrawals: Withdrawals;

  constructor(public api_key: string) {
    this.user = new User(this.api_key);
    this.wallets = new Wallets(this.api_key);
    this.market = new Market(this.api_key);
    this.orders = new Orders(this.api_key);
    this.withdrawals = new Withdrawals(this.api_key);
  }
}
export default Quidax;

// testing
