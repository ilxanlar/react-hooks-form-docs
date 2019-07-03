---
id: using-hooks
title: Using Hooks
---

Hooks are the power of React Hooks Form. Let's learn the proper way to use form/field data.

> Every Hook we demonstrate here, accepts one extra `formName` parameter. If you use these hooks inside the `Form` component tree, it'll be determined automatically. But if you're planing to use the hooks outside the form tree, passing `formName` is required.

In the examples below, we assume that you use the hooks inside the `Form` component tree.

## Use Form Field Value

Let's create a donate form! You fill in your name and the amount of money you want to donate to something.

```jsx
import React from 'react'
import { Form, FormField } from 'react-hooks-form'

function App() {
  return (
    <Form>
      <FormField component="input" name="username" />
      <FormField component="input" name="amount" type="number" />
      <button type="submit">Donate</button>
    </Form>
  )
}
```

Suppose you want to preview the amount you're going to donate in a green box. All you need is the `amount` field value and that is achieved by the `useFormFieldValue` hook.

```jsx
import React from 'react'
import { useFormFieldValue } from 'react-hooks-form'

function Preview() {
  const amount = useFormFieldValue('amount')
  return (
    <p style={{ backgroundColor: 'green', color: 'white', padding: 20 }}>
      You are going to donate <b>{amount}</b> dollars!
    </p>
  )
}
```

Now you can write:

```jsx
<Form>
  ...
  <Preview />
  ...
</Form>
```

You can read more details about [useFormFieldValue](hooks/useFormFieldValue.md) in the API docs.


## Use Form Field Meta

You're familiar with this hook. We used it in client-side validation section. You'll usually use it for displaying field validation status and error.

```js
const meta = useFormFieldMeta('name')

const {
  active,
  error,
  invalid,
  visited
} = meta
```

Read more about [useFormFieldMeta](hooks/useFormFieldMeta.md) in the API docs.

## Use Form Values

We want to create a component which logs form values into console anytime a field changes. Easy! There's a hooks for that!

```jsx
function LogValues() {
  const values = useFormValues();
  console.log('Form values: ', values);
  return null;
}
```

And you'll use that component like so:

```jsx
<Form>
  ...
  <LogValues />
  ...
</Form>
```


## Use Form Meta

This one's familiar too! We used it to hook into form submission status.

```js
const formMeta = useFormMeta()

const {
  submitting,
  submitFailed,
  submitSucceeded,
  error
} = formMeta
```

Read more in [useFormMeta](hooks/useFormMeta.md) API docs.


## Use Form API

Ok, this is the hook that will help you when other hooks can't help! This hook exposes the React Hooks Form API.

```js
const form = useForm()
```

You can initialize or reset the form, change field values or submit the form:

```js
// Use the HOOK
const form = useForm()

// Reset form
form.reset()

// Initialize with new values
form.initialize({
  email: 'new-email@gmail.com',
  name: 'New Name'
})

// Change a field value
form.changeFieldValue('email', 'new-email@gmail.co')

// Submit form
form.submit()
```

To see what you can do with the form API, read more in the [useForm](hooks/useForm.md) API docs.
