import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { useFormikContext } from "formik";
import { style } from "./style";


export const TextField = ({ name, value, label, ...props }) => {

  const { touched, errors, values, handleBlur, handleChange } = useFormikContext();

  return (
    <View style={style.container(errors[name] && touched[name])}>
      <Text>{label}</Text>
      <TextInput
        label={label}
        placeholder={label}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        {...props}
      />
      {errors[name] && touched[name] ? (
        <Text style={style.errorText}>{errors[name]}</Text>
      ) : null}
    </View>
  );

};
