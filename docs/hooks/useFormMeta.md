---
id: useFormMeta
title: useFormMeta
---

Use this hook to get the form meta.

## Signature

`useFormMeta([formName])`

## Params

| Name        | Description |
| ----------- | ----------- |
| `formName`  | OPTIONAL! Name of the form. You do NOT need to pass this if you use it inside the form context. |

## Return Value

An object including the following properties:

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| submitting      | bool   | Whether the form is being submitted or not. |
| submitFailed    | bool   | Whether the form submission was failed or not. |
| submitSucceeded | bool   | Whether the form submission was successful or not. |
| error           | object | An object including errors if the submission is failed. Both client-side and server-side error will be store here. |
| result          | any    | Optional server-side result returned from `onSubmit` if the submission is successful. |

## Example

The following example displays form errors:

```jsx harmony
function FormErrors() {
  const { error, submitFailed } = useFormMeta()

  if (submitFailed) {
    return <p>{error.message}</p>
  }
  
  return null
}
```

Or suppose you want to add a loading status on the button while the form is being submitted:

```jsx harmony
function Submit() {
  const { submitting } = useFormMeta()

  return (
    <button type="submit">
      {submitting ? 'Saving...' : 'Save'}
    </button>
  )
}
```

You can do more and show a success message to the user by the help of `submitSucceeded` property on the status returned.
