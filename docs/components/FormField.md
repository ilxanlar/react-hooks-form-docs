---
id: FormField
title: <FormField />
---

For examples on how to use `FormField`, please read the [Input Component](guides/input-component.md) section.

## Props you can pass to `<FormField />`

| Prop      | Type        | Description |
| --------- | ----------- | ----------- |
| name      | string      | **REQUIRED!** Field name (This can be any lodash-like key) |
| component | string/func | **REQUIRED!** Input component the field should render. You can use built-in HTML inputs or provide your custom component. |
| formName  | string | The form name that this field belongs to. You usually do NOT need this because FormField reads it from the context by default. |

Any field other than the above ones that you pass to `FormField` will be passed to the input component.
