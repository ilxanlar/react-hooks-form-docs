---
id: input-component
title: Input Components
---

## HTML Native Inputs

If you're going to use a HTML input, such as `<input />`, `<select />` or `<textarea />`, just pass a string component prop:

```jsx
<FormField component="input" />
<FormField component="select" />
<FormField component="textarea" />
```

To customize the input component, you can pass extra props:

```jsx
<FormField component="input" type="text" className="my-custom-input" />
<FormField component="input" type="password" />
<FormField component="input" type="email" />
<FormField component="input" type="number" min={5} max={1200} />

<FormField component="input" type="checkbox" value="Yes" />

<FormField component="input" type="radio" value="Yes" />
<FormField component="input" type="radio" value="No" />

<FormField component="input" type="file" />
...
<FormField component="select" />
<FormField component="select" multiple={true} />
...
<FormField component="textarea" cols={20} rows={5} />
```

We need to show you some examples on how to use checkbox, radio button and select inputs.


### Select

Look how we put select options inside the FormField:

```jsx harmony
<FormField component="select" name="job">
  <option value="1">Frontend Developer</option>
  <option value="2">Backend Developer</option>
  <option value="3">Mobile Developer</option>
  <option value="4">Full-stack Developer</option>
</FormField>
```


### Checkbox

Consider a `true`/`false` input:

```jsx harmony
<FormField component="input" name="subscribe" type="checkbox" />
```


### Radio

Consider a gender input (male/female/other):

```jsx harmony
<FormField component="input" name="gender" type="radio" value="female" />
<FormField component="input" name="gender" type="radio" value="male" />
<FormField component="input" name="gender" type="radio" value="other" />
```


Ok, now you know how to use HTML inputs, it's time to talk about Custom Input Components.


## Custom Input Components

First, let's see a basic example of custom inputs:

```jsx
function MyCustomTextInput({ label, onChange, value }) {
  return (
    <div class="form-field">
      <label>{label}</label>
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
}
```

You see that `onChange` and `value` are the least props you use to build a basic input. Now, you'll pass `MyCustomTextInput` to `FormField` as `component` prop:

```jsx
<FormField component={MyCustomTextInput} name="yourName" label="Your name:" />
```

### Props Passed to Input Component

There are some props other than `onChange` and `value` that you can use in custom components. The following props are passed to your component:

| Prop | Description | Type |
| --- | --- | --- |
| onChange | A function to when the field value is changed. You must pass field's new value to the function. | Function |
| onFocus | A function to call when the input is focused. | Function |
| onBlur | A function to call when the input is blurred. | Function |
| value | The value of the field | Any |
| name | The field name | String |
| formName | The form name | String |
