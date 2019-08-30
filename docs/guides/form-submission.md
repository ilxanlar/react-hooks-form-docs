---
id: form-submission
title: Form Submission
---

As you're aware by now, to handle form submission, you provide `Form` component with an async function named `onSubmit`.

```jsx harmony
import React from 'react'
import { Form } from 'react-hooks-form'

async function handleSubmit(values) {
  const response = await _myApiRequest(values)

  if (response.status === 422) {
    throw await response.json()
    // Throw server-side errors
    // useFormMeta().error
  } else {
    return await response.json()
    // Return submission result (Optional)
    // useFormMeta().result
  }
}

function SignUpForm() {
  return (
    <Form name="signUp" onSubmit={handleSubmit}>
      ...
    </Form>
  )
}
```

If you don't want to use async syntax, you can provide a normal function and instead, return a `Promise`.

## Submission Status

Form submission status can be accessed via `useFormMeta` hook. `submitting`, `submitFailed` and `submitSucceeded` are three boolean flags you can use to alter the UI based on form status.

```js
const {
  submitting,
  submitFailed,
  submitSucceeded
} = useFormMeta()
```

### Disabled/Loading Submit Button

You want to disable the submit button or show a loading indicator while form is being submitted. Ok, use form meta!

```jsx harmony
import React from 'react'
import { useFormMeta } from 'react-hooks-form'

function SubmitButton() {
  const { submitting } = useFormMeta()
  
  return (
    <Button
      disabled={submitting}
      loading={submitting}
      text="Save"
    />
  )
}
```

## Remote Submit Button

So far, we've only used HTML form `onSubmit` event to trigger form submission. It's possible that you trigger it yourself, programmatically!

```jsx harmony
import React from 'react'
import { useForm, useFormMeta } from 'react-hooks-form'

function RemoteSubmitButton() {
  const form = useForm()
  const { submitting } = useFormMeta()
  
  const handleRemoteSubmit = () => form.submit()
  
  return (
    <Button
      disabled={submitting}
      loading={submitting}
      onClick={handleRemoteSubmit}
      text="Save"
    />
  )
}
```

Here's the new hook `useForm`. This one gives you access to the form API. You'll learn more about it in the next section.
