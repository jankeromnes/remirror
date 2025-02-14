<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/react](./react.md) &gt; [RemirrorProps](./react.remirrorprops.md) &gt; [suppressHydrationWarning](./react.remirrorprops.suppresshydrationwarning.md)

## RemirrorProps.suppressHydrationWarning property

Set to true to ignore the hydration warning for a mismatch between the rendered server and client content.

<b>Signature:</b>

```typescript
suppressHydrationWarning?: boolean;
```

## Remarks

This is a potential solution for those who require server side rendering.

While on the server the prosemirror document is transformed into a react component so that it can be rendered. The moment it enters the DOM environment prosemirror takes over control of the root element. The problem is that this will always see this hydration warning on the client:

`Warning: Did not expect server HTML to contain a <div> in <div>.`

Setting this to true removes the warning at the cost of a slightly slower start up time. It uses the two pass solution mentioned in the react docs. See [https://reactjs.org/docs/react-dom.html\#hydrate](https://reactjs.org/docs/react-dom.html#hydrate)<!-- -->.

The props also takes it's name from a similar API used by react for DOM Elements. See {@<!-- -->link https://reactjs.org/docs/dom-elements.html\#suppresshydrationwarning.

