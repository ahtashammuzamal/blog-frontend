import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const IconButton = ({
  children,
  to,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <Button asChild variant={variant} className={className} {...props}>
      <Link to={to}>{children}</Link>
    </Button>
  );
};
export default IconButton;
