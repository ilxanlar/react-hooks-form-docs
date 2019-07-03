---
id: usage
title: Usage
---

React Hooks Form makes it easy to build your forms. Consider the following example, this is a simple sign-up form:

```js
import React from 'react'
import { Form, FormField } from 'react-hooks-form'

async function handleSubmit(values) {
  try {
    await _myApiRequest(values);
  } catch (error) {
    alert(error.message)
  }
}

function SignUpForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <FormField component="input" name="fullName" type="text" />
      <FormField component="input" name="email" type="text" />
      <FormField component="input" name="password" type="password" />
      <button type="submit">Sign Up</button>
    </Form>
  )
}
```


