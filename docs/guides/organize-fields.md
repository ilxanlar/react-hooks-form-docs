---
id: organize-fields
title: Organizing Your Fields
---

For simple forms, it's enough to use flat field names, as you saw in previous sections:

```jsx harmony
<FormField name="name" />
<FormField name="email" />
<FormField name="password" />
```

Sometimes it's not enough cause you want your fields more organized, like grouping them into sub-fields. 
React Hooks Form uses lodash-like keys for storing values. 
This means that your field name could be any key that lodash supports.

All of the following names are valid:

```jsx
// Array
<FormField name="holidays[0]" />
<FormField name="holidays[1]" />
<FormField name="holidays[2]" />

// Object
<FormField name="product.name" />
<FormField name="product.price" />
<FormField name="seller.name" />
<FormField name="seller.url" />

// Array of objects
<FormField name="options[0].label" />
<FormField name="options[0].value" />
<FormField name="options[1].label" />
<FormField name="options[1].value" />
```

This way you'll get nested form values:

```js
{
  // Array
  holidays: [
    '2019-01-01',
    '2019-01-02',
    '2019-01-03'
  ],

  // Object
  product: {
    name: 'Google Pixel 3',
    price: '449.99',
  },
  seller: {
    name: 'Amazon',
    url: 'https://amazon.com'
  }

  // Array of Objects
  options: [
    {
      label: 'Option A',
      value: 'a'
    },
    {
      label: 'Option B',
      value: 'b'
    }
  ]
}
```
