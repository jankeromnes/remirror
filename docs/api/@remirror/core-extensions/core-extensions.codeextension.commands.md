<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core-extensions](./core-extensions.md) &gt; [CodeExtension](./core-extensions.codeextension.md) &gt; [commands](./core-extensions.codeextension.commands.md)

## CodeExtension.commands() method

<b>Signature:</b>

```typescript
commands({ type }: CommandMarkTypeParams): {
        code: () => (state: import("prosemirror-state").EditorState<import("prosemirror-model").Schema<string, string>>, dispatch?: ((tr: import("prosemirror-state").Transaction<import("prosemirror-model").Schema<string, string>>) => void) | undefined) => boolean;
    };
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  { type } | <code>CommandMarkTypeParams</code> |  |

<b>Returns:</b>

`{
        code: () => (state: import("prosemirror-state").EditorState<import("prosemirror-model").Schema<string, string>>, dispatch?: ((tr: import("prosemirror-state").Transaction<import("prosemirror-model").Schema<string, string>>) => void) | undefined) => boolean;
    }`

