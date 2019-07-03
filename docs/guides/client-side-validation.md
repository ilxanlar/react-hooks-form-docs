---
id: client-side-validation
title: Client-side Validation
---

You can easily add client-side validation to your forms. Just write a validation function that takes form values and returns an object of errors (if there are any). Then, pass this validation function to the `Form` component as `validate` prop.

Client-side validation runs every time a field value changes in the form so if your field is invalid, your field error will always be present.

Remember the sign-up form? Let's add a validation function to it:

```js
import { isEmpty, isValidEmail } from './someValidators'

function validate(formValues) {
  let errors = {};

  if (isEmpty(formValues.email)) {
    errors.email = 'Email is required!'
  } else if (!isValidEmail(formValues.email)) {
    errors.email = 'Email you entered is invalid.'
  }

  if (isEmpty(formValues.password)) {
    errors.password = 'Password is required!'
  }

  return {
    // This is a generic message of what happened
    // OPTIONAL
    message: 'Please fix these validation errors and try again:',

    // These are field errors sent back from the server
    errors: errors
  };
}
```

Providing `message` is completely optional. This is only an extra message to better describe why the form submission failed!

Bear in mind that this is only client-side validation. You would also validate form values on the server and send back the errors. You will learn more about this in the next sections.

## Arrays and Objects Validation

We expect you use a flat error object for nested fields. Consider the following fields:

```jsx harmony
<FormField name="product.name" />
<FormField name="product.price" />
<FormField name="options[1].label" />
<FormField name="options[1].value" />
```

We expect to get error in this format:

```js
{
  message: 'Validation failed!',
  errors: {
    "product.name": '...',
    "product.price": '...',
    "options[1].label": '...',
    "options[1].value": '...'
  }
}
```


## Displaying Validation Errors

There are two ways to display validation errors

- Display all errors together
- Display errors separately on each field

### Display all errors together

In order to access the form errors you're going to use a hook, `useFormMeta` hook. It's easy to write a component that renders the validation errors. We want to display the errors if the form submission has failed:

```jsx
import React from 'react'
import { useFormMeta } from 'react-hooks-form'

function ValidationErrors() {
  const { error, submitFailed } = useFormMeta()

  // Render errors if submit failed and have errors
  if (submitFailed && error) {
    return (
      <div className="form-errors">
        <p>{error.message}</p>
        <ul>
          {Object.values(error.errors).map((err, key) => (
            <li key={key}>{err}</li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}
```

Finally, our sign-up form will look like this:

```jsx
<Form onSubmit={handleSubmit} validate={validate}>
  <ValidationErrors />
  <FormField component="input" name="fullName" type="text" />
  <FormField component="input" name="email" type="text" />
  <FormField component="input" name="password" type="password" />
  <button type="submit">Sign Up</button>
</Form>
```

> If you plan to display all errors together,
> you should know that `error` gets updated only when you submit the form.

### Display errors separately on each field

We're going to write a component that renders field error simply by putting `<FieldError/>` besides the field, for example:

```jsx
<FormField component="input" name="email" type="text" />
<FieldError name="email" />
```

We're going to use `useFormFieldMeta` hook for getting info about the field:

```jsx
import React from 'react'
import { useFormFieldMeta } from 'react-hooks-form'

function FieldError({ name }) {
  const { error, invalid, visited } = useFormFieldMeta(name)

  if (visited && invalid) {
    return (
      <div className="field-error">
        {error}
      </div>
    )
  }

  return null
}
```

Finally, our sign-up form will look like this:

```jsx
<Form onSubmit={handleSubmit} validate={validate}>
  <FormField component="input" name="fullName" type="text" />

  <FormField component="input" name="email" type="text" />
  <FieldError name="email" />

  <FormField component="input" name="password" type="password" />
  <FieldError name="password" />

  <button type="submit">Sign Up</button>
</Form>
```

> When you submit the form, all the fields are marked as visited.
