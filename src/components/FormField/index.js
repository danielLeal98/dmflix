import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormFieldWrapper, Label, Input } from "./styles";

function FormField({ label, type, name, value, onChange }) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === "textarea";
  const tag = isTypeTextArea ? "textarea" : "input";
  return (
    <FormFieldWrapper>
      <Label html={fieldId}>
        <Input
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>{label}:</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
};

FormField.prototypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
