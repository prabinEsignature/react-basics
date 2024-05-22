import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/useShoppingCart";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/FormatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id) as ProductItemProps;
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        style={{
          width: "125px",
          height: "75px",
          objectFit: "cover",
        }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span
              className="text-muted"
              style={{
                fontSize: ".65rem",
              }}
            >
              x{quantity}
            </span>
          )}
        </div>
        <div
          className="text-muted"
          style={{
            fontSize: ".75rem",
          }}
        >
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>
        {formatCurrency(item.price * quantity || 0)}
        <Button
          className="ms-2"
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
