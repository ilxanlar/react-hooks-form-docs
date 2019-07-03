---
id: useFormValues
title: useFormValues
---

Use this hook to get the whole form values.

## Signature

`useFormValues([formName])`

## Params

| Name        | Description |
| ----------- | ----------- |
| `formName`  | OPTIONAL! Name of the form. You do NOT need to pass this if you use it inside the form context. |

## Return Value

An object of form values.

## Example

```jsx harmony
function FormLog() {
  const formValues = useFormValues();
  console.log(formValues);
  return 'This component logs form data to the console.';
}
```
