<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [jest-remirror](./jest-remirror.md) &gt; [AddContentReturn](./jest-remirror.addcontentreturn.md) &gt; [callback](./jest-remirror.addcontentreturn.callback.md)

## AddContentReturn.callback() method

Allows for the chaining of calls and is useful for running tests after actions.

You shouldn't use it to call any mutative functions that would change the editor state.

```ts
const create = () => renderEditor({ plainNodes: [], others: [new EmojiExtension()] });
const {
  nodes: { p, doc },
  add,
} = create();

add(doc(p('<cursor>'))).insertText(':-)')
  .callback(content => {
    expect(content.state.doc).toEqualRemirrorDocument(doc(p('😃')));
  })
  .insertText(' awesome')
  .callback(content => {
     expect(content.state.doc).toEqualRemirrorDocument(doc(p('😃 awesome')));
  });

```

<b>Signature:</b>

```typescript
callback(fn: (content: Pick<AddContentReturn<GExtension>, 'helpers' | 'actions' | 'end' | 'state' | 'tags' | 'start' | 'doc'>) => void): AddContentReturn<GExtension>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fn | <code>(content: Pick&lt;AddContentReturn&lt;GExtension&gt;, 'helpers' &#124; 'actions' &#124; 'end' &#124; 'state' &#124; 'tags' &#124; 'start' &#124; 'doc'&gt;) =&gt; void</code> |  |

<b>Returns:</b>

`AddContentReturn<GExtension>`

