import DateInput from "./template.njk";
import macroOptions from "./macro-options.json";

const argTypes = {
  classes: { control: "text" },
  attributes: { control: "object" },
};

Object.keys(argTypes).forEach((argType) => {
  const macroOption = macroOptions.find((option) => option.name === argType);
  argTypes[argType] = {
    ...argTypes[argType],
    description: macroOption?.description,
  };
});

export default {
  title: "Components/Date input",
  argTypes,
};

const Template = ({ classes, attributes }) =>
  DateInput({
    params: {
      classes,
      attributes,
    },
  });

export const Standard = Template.bind({});
Standard.args = {
  classes: "tna-card--date-input",
};
