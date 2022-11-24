import { Component } from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };


  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : "";
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input}) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInputs = (name, type) => {
    const { data, errors } = this.state;
    return (
      <Inputs
        name={name}
        value={data[name]}
        errors={errors[name]}
        type={type}
        onChange={this.handleChange}
      />
    );
  };

  renderTextarea = (value, label, style) => {
    return (
      <Inputs
        textarea={true}
        textareaStyle={style}
        value={value}
        label={label}
        placeholder={value}
        error={""}
      />
    );
  };

  renderButtons = (text) => {
    return (
      <Buttons
        buttonText={text}
        onSubmit={this.onSubmit}
      />
    );
  };
}

export default Form;