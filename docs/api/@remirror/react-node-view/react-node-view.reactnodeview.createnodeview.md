<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/react-node-view](./react-node-view.md) &gt; [ReactNodeView](./react-node-view.reactnodeview.md) &gt; [createNodeView](./react-node-view.reactnodeview.createnodeview.md)

## ReactNodeView.createNodeView() method

A shorthand method for creating the ReactNodeView

<b>Signature:</b>

```typescript
static createNodeView<GOptions extends BaseExtensionOptions = BaseExtensionOptions, GAttrs extends Attrs = Attrs>({ Component, portalContainer, options }: CreateNodeViewParams<GOptions, GAttrs>): (node: import("prosemirror-model").Node<any>, view: import("prosemirror-view").EditorView<any>, getPosition: GetPosition) => ReactNodeView<GOptions, GAttrs>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  { Component, portalContainer, options } | <code>CreateNodeViewParams&lt;GOptions, GAttrs&gt;</code> |  |

<b>Returns:</b>

`(node: import("prosemirror-model").Node<any>, view: import("prosemirror-view").EditorView<any>, getPosition: GetPosition) => ReactNodeView<GOptions, GAttrs>`

