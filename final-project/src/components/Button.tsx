import Spinner from "./Spinner";

type ButtonProps = {
  onClick?: (...args: unknown[]) => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit';
  text: string;
}

const Button = ({ disabled = false, loading = false, onClick, type = "button", text }: ButtonProps) => {

  const disabledClass = disabled ? 'button--disabled' : '';
  return (
    <button
      className={`button button--primary w-24 self-center flex justify-center ${disabledClass}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
        >
          { loading ? <Spinner /> : text }
          
        </button>
  )
}

export default Button;