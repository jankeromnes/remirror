<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/extension-code-block](./extension-code-block.md) &gt; [CodeBlockExtension](./extension-code-block.codeblockextension.md) &gt; [commands](./extension-code-block.codeblockextension.commands.md)

## CodeBlockExtension.commands() method

<b>Signature:</b>

```typescript
commands({ type, schema }: CommandNodeTypeParams): {
        toggleCodeBlock: (attrs?: Partial<CodeBlockAttrs> | undefined) => import("@remirror/core").CommandFunction<any>;
        createCodeBlock: (attrs: CodeBlockAttrs) => (state: import("prosemirror-state").EditorState<import("prosemirror-model").Schema<string, string>>, dispatch?: ((tr: import("prosemirror-state").Transaction<import("prosemirror-model").Schema<string, string>>) => void) | undefined) => boolean;
        updateCodeBlock: (attrs: CodeBlockAttrs) => import("@remirror/core").CommandFunction<any>;
        formatCodeBlock: ({ pos }?: Partial<import("@remirror/core").PosParams>) => import("@remirror/core").CommandFunction<any>;
    };
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  { type, schema } | <code>CommandNodeTypeParams</code> |  |

<b>Returns:</b>

`{
        toggleCodeBlock: (attrs?: Partial<CodeBlockAttrs> | undefined) => import("@remirror/core").CommandFunction<any>;
        createCodeBlock: (attrs: CodeBlockAttrs) => (state: import("prosemirror-state").EditorState<import("prosemirror-model").Schema<string, string>>, dispatch?: ((tr: import("prosemirror-state").Transaction<import("prosemirror-model").Schema<string, string>>) => void) | undefined) => boolean;
        updateCodeBlock: (attrs: CodeBlockAttrs) => import("@remirror/core").CommandFunction<any>;
        formatCodeBlock: ({ pos }?: Partial<import("@remirror/core").PosParams>) => import("@remirror/core").CommandFunction<any>;
    }`

