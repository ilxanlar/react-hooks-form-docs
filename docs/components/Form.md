---
id: Form
title: <Form />
---

This is the component you need to build a form, basically you do this:

```jsx harmony
function SimpleForm() {
  function handleSubmit(data) {
    // Do something with data
  }

  return (
    <Form onSubmit={handleSubmit}>
      // fields...
    </Form>
  );
}
```

## Props you can pass to `<Form />`

The following table shows the available props you can pass to Form component:

| Prop               | Type   | Description |
| ------------------ | ------ | ----------- |
| name               | string | Name your form |
| initialValues      | object | Values to initialize form with |
| enableReinitialize | bool   | Whether to re-initialize the form every time `initialValues` changes. Default is `false`. |
| visitOnBlur        | bool   | Mark the fields as `visited` when the field is blurred. Default is `true`. |
| visitOnChange      | bool   | Mark the fields as `visited` when the field is changed. Default is `false`. |
| onSubmit           | func   | **REQUIRED!** A function which receives form data and returns a Promise. Read more about onSubmit below this table |
| onSubmitComplete   | func   | Fired whether form submission is successful or not |
| onSubmitFail       | func   | Fired when submission fails |
| onSubmitSucceed    | func   | Fired when submission succeeds |
| validate           | func   | A function which receives form data and validates data. Read more about validate below this table |
| destroyOnUnmount   | bool   | Reset everything to initial state or not. Default is `true`. |
