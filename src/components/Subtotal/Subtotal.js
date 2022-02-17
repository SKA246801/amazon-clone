import React from "react"
import "./Subtotal.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useStateValue } from "../../utils/StateProvider"
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "../../utils/Reducer"

function Subtotal() {
  const history = useHistory()
  const [state, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {state ? (
              <p>
                Subtotal ({state.basket.length} items): <strong>{value}</strong>
              </p>
            ) : (
              <p>
                Subtotal (0 items): <strong>{0}</strong>
              </p>
            )}
            <small className="gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="checkout-btn" onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
