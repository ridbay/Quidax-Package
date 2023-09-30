import User from './features/user';
import Wallets from './features/wallets';
import Market from './features/market';
import Orders from './features/orders';
import Withdrawals from './features/withdrawals';
import Deposits from './features/deposits';

class Quidax {
  user: User;

  wallets: Wallets;

  market: Market;

  orders: Orders;

  withdrawals: Withdrawals;

  deposits: Deposits;

  constructor(public api_key: string) {
    this.user:User = new User(this.api_key);
    this.wallets = new Wallets(this.api_key);
    this.market = new Market(this.api_key);
    this.orders = new Orders(this.api_key);
    this.withdrawals = new Withdrawals(this.api_key);
    this.deposits = new Deposits(this.api_key);
  }
}
export default Quidax;

// testing
