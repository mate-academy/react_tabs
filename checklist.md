1. [CODE KNOWLEDGE] - When you rendering a list, don't forget to add `key` prop

BAD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat cat={cat} />)}
</div>
```

GOOD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat key={cat.id} cat={cat} />)}
</div>
```
