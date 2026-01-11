import { Spinner } from "../ui/spinner";

const CustomSpinner = ({ className }) => {
  return (
    <div className={`min-h-96 flex items-center justify-center ${className}`}>
      <Spinner className={"text-blue-500"} />
    </div>
  );
};
export default CustomSpinner;
