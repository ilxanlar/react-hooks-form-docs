---
id: server-side-validation
title: Server-side Validation
---

To support server-side validation, all you have to do is throwing an error object in `onSubmit` function. For the sign-up example, we would throw the object below:

```js
{
  // This is a generic message of what happened
  // OPTIONAL
  message: 'Please fix these validation errors and try again:',

  // These are field errors sent back from the server
  // SAME AS CLIENT-SIDE ERRORS
  errors: {
    email: 'This email is already signed up.',
    password: 'Password too weak'
  }
}
```

As you see, the error object is exactly the same as client-side error.
