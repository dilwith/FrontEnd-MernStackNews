import { InputSpace } from "./InputStyled";
import PropTypes from 'prop-types';

export function Input({ type, placeholder, name , register}) {
  return (
    <InputSpace type={type} placeholder={placeholder} {...register(name)} />
  );
}
Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.string,
};