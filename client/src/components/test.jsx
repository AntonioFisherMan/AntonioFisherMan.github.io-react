
class CartItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.item.quantity
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let item = this.props.item;
    item.quantity = item.quantity + 1;
    this.setQuantity(item.quantity);
  }

  decrease() {
    let item = this.props.item;

    if (item.quantity >= 1) {
      item.quantity = item.quantity - 1;
    }
    this.setQuantity(item.quantity);
  }

  setQuantity(quantity) {
    this.setState({
      quantity: quantity
    });

    this.props.setItemQuantity(this.props.item._id, quantity);
  }

  render() {
    let item = this.props.item;

    return (
      <tr className="CartItem">
        <td className="name"><Link to={'/catalog/' + item._id}>{item.name}</Link></td>
        <td className="price">{item.price}</td>
        <td className="quantity">
          <div>{this.state.quantity}</div>
          <div className="controls">
            <button className="increase" onClick={this.increase}>+</button>
            <button className="decrease" onClick={this.decrease}>-</button>
          </div>
        </td>
        <td className="price-total">{item.price * this.state.quantity}</td>
      </tr>
    );
  }
}

export default CartItem;



import CartItem from '../components/CartItem/CartItem';

class CartPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0
    };

    this.setItemQuantity = this.setItemQuantity.bind(this);
    this.submitOrder = this.submitOrder.bind(this);

    this.cartItems = STATE.cart.map(cartItem => {

      let product = STATE.products.find(productItem => cartItem._id === productItem._id);

      if (product) {
        cartItem.name = product.name;
        cartItem.price = product.price;
      }

      return cartItem;
    });

    this.cartItemsComponents = this.cartItems.map(cartItem => {
      return (
        <CartItem
          setItemQuantity={this.setItemQuantity}
          item={cartItem}
          key={cartItem._id}
        />)
    });
  }

  componentDidMount() {
    this.setTotalPrice();
  }

  setTotalPrice() {
    let totalPrice = 0;

    this.cartItems.forEach(item => {
      totalPrice += (item.price * item.quantity);
    });

    this.setState({
      totalPrice: totalPrice
    });
  }

  setItemQuantity(id, quantity) {
    let item = this.cartItems.find(item => item._id === id);

    item.quantity = quantity;

    this.setTotalPrice();

    // Update state
    STATE.cart = this.cartItems;
  }

  submitOrder() {
    browserHistory.push('/cart/checkout');
  }

  render() {
    return (
      <div className="CartPage">
        <h3>Корзина</h3>

        <table style={{ width: '100%' }}>
          <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
          </tr>
          </thead>

          <tbody>
          {this.cartItemsComponents}
          </tbody>

          <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ textAlign: 'right' }}>
              Итого: <span className="total">{this.state.totalPrice}</span>
            </td>
          </tr>
          </tfoot>
        </table>



        <button
          onClick={this.submitOrder}
          className="order">
          Оформить заказ
        </button>

        {this.props.children}
      </div>
    );
  }
}

export default CartPage;
