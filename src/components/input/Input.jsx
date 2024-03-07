import { InputSpace } from "./InputStyled";
import PropTypes from 'prop-types';

export function Input({ type, placeholder, }) {
  return (
    <InputSpace type={type} placeholder={placeholder} />
  );
}
Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.string,
};