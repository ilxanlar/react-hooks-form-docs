---
id: useFormFieldMeta
title: useFormFieldMeta
---

Use this hook to get a field meta.

## Signature

`useFormFieldMeta(fieldName[, formName])`

## Params

| Name        | Description |
| ----------- | ----------- |
| `fieldName` | Name of the field |
| `formName`  | OPTIONAL! Name of the form. You do NOT need to pass this if you use it inside the form context. |

## Return Value

An object including the following properties:

| Name    | Type  | Description |
| ------- | ----  | ----------- |
| active  | bool  | Whether the field is focused or not. |
| visited | bool  | Whether the field is ever visited. |
| invalid | bool  | Whether the field is marked as invalid or not. |
| error   | mixed | Field error if it's invalid. |

## Example

```jsx harmony
function FieldError({ name }) {
  const { invalid, error, visited } = useFormFieldMeta(name)
  
  if (invalid && visited) {
    return <p>{error}</p>
  }
  
  return null
}
```
