<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core-extensions](./core-extensions.md) &gt; [HistoryExtension](./core-extensions.historyextension.md)

## HistoryExtension class

This extension provides undo and redo commands and inserts a plugin which handles history related actions.


<b>Signature:</b>

```typescript
export declare class HistoryExtension extends Extension<HistoryExtensionOptions> 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [defaultOptions](./core-extensions.historyextension.defaultoptions.md) |  | <code>{</code><br/><code>        depth: number;</code><br/><code>        newGroupDelay: number;</code><br/><code>    }</code> |  |
|  [name](./core-extensions.historyextension.name.md) |  | <code>&quot;history&quot;</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [commands()](./core-extensions.historyextension.commands.md) |  | Provide the undo and redo commands. |
|  [isActive()](./core-extensions.historyextension.isactive.md) |  | The history plugin doesn't really have an active state. |
|  [isEnabled({ getState })](./core-extensions.historyextension.isenabled.md) |  | Provides the isEnabled method to the ActionMethods of undo and redo. |
|  [keys()](./core-extensions.historyextension.keys.md) |  | Adds the default key mappings for undo and redo. |
|  [plugin()](./core-extensions.historyextension.plugin.md) |  | Bring the <code>prosemirror-history</code> plugin with options set on theis extension. |

