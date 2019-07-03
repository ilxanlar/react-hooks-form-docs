---
id: useFormFieldValue
title: useFormFieldValue
---

Use this hook to get the value of a field.

## Signature

`useFormFieldValue(fieldName[, formName])`

## Params

| Name        | Description |
| ----------- | ----------- |
| `fieldName` | Name of the field |
| `formName`  | OPTIONAL! Name of the form. You do NOT need to pass this if you use it inside the form context. |

## Return value

Value of the field.

## Example

```jsx harmony
function Subtotal({ price }) {
  const qty = useFormFieldValue('qty');

  return (
    <span>Subtotal is {qty * price} dollars!</span>
  );
}
```
