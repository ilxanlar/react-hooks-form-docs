---
id: useForm
title: useForm
---

Use this hook to access the Form API.

## Signature

`useForm([formName])`

## Params

| Name        | Description |
| ----------- | ----------- |
| `formName`  | OPTIONAL! Name of the form. You do NOT need to pass this if you use it inside the form context. |


## Methods

The form API includes the following methods:


### getFieldValue(fieldName)

Get the value of a field.

```js
const fieldValue = api.getFieldValue('fieldName')
```


### changeFieldValue(fieldName, fieldValue)

Change the value of a field.

```js
api.changeFieldValue('qty', 4)
```

Field value can be anything. Please be careful if you're using this to change an array or object field value.

After the value is changed:

- Client-side errors will be updated after the field value is changed.
- If you set `visitOnChange` to `true` for the form, the field will be marked as visited.

If you want to change field's value based on the field's current value, you can pass a function:

```js
api.changeFieldValue('qty', (qty, formValues) => {
  return qty + 1
})
```


### getFieldMeta(fieldName, meta)

Get the meta of a field.

```js
const isVisited = api.getFieldMeta('fieldName', 'visited')
```

If you want to get a field's all meta, just do not pass meta name:

```js
const { active, visited, invalid, error } = api.getFieldMeta('fieldName')
```


### changeFieldMeta(fieldName, meta, value)

Change the meta of a field.

```js
api.changeFieldMeta('fieldName', 'visited', true)
```

If you want to change multiple metas of a field in one function call, 
you can pass an object instead of meta name:

```js
api.changeFieldMeta('fieldName', {
  active: true,
  visited: false
})
```


### getValues()

Get the whole form values.

```js
const formValues = api.getValues()
```


### getMeta()

Get the form meta.

```js
const {
  submitting,
  submitFailed,
  submitSucceeded,
  error,
  result
} = api.getMeta()
```


### initialize(values, options)

Initialize form with new values.

```js
api.initialize({
  name: 'My name',
  qty: 2
})
```

Client-side errors will be updated after the form is initialized.

You can pass the following options for the second parameter:

#### options.unvisitFields

Whether to unvisit the fields (`visited: false`) when validating form values.


### reset()

Initialize the form with the last initialized values.

```js
api.reset()
```


### submit()

Starts the form submission. It's exactly the same as clicking the submit button.

```js
api.submit()
```


## Example

```jsx harmony
function RemoteSubmitButton() {
  const form = useForm();

  const handleClick = () => {
    form.submit();
  };

  return (
    <button onClick={handleClick}>
      Save
    </button>
  );
}
```
