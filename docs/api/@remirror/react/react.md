<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/react](./react.md)

## react package

## Classes

|  Class | Description |
|  --- | --- |
|  [Remirror](./react.remirror.md) |  |
|  [RemirrorManager](./react.remirrormanager.md) | This component consumes any directly nested RemirrorExtension components and creates a manager instance which is passed into the created context for any children to consume.<!-- -->It allows for a more React-ish way of managing Prosemirror. |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [BaseExtensionProps](./react.baseextensionprops.md) |  |
|  [BaseListenerParams](./react.baselistenerparams.md) |  |
|  [EditorStateEventListenerParams](./react.editorstateeventlistenerparams.md) |  |
|  [GetManagerFromComponentTreeParams](./react.getmanagerfromcomponenttreeparams.md) |  |
|  [GetPositionParams](./react.getpositionparams.md) |  |
|  [GetRootPropsConfig](./react.getrootpropsconfig.md) |  |
|  [InjectedRemirrorProps](./react.injectedremirrorprops.md) | These are the props passed to the render function provided when setting up your editor. |
|  [IsActiveParams](./react.isactiveparams.md) |  |
|  [ListenerParams](./react.listenerparams.md) |  |
|  [ManagedRemirrorProviderProps](./react.managedremirrorproviderprops.md) |  |
|  [PlaceholderConfig](./react.placeholderconfig.md) |  |
|  [Positioner](./react.positioner.md) |  |
|  [PositionerIdParams](./react.positioneridparams.md) |  |
|  [PositionerParams](./react.positionerparams.md) |  |
|  [PositionerRefFactoryParams](./react.positionerreffactoryparams.md) |  |
|  [RefParams](./react.refparams.md) |  |
|  [RemirrorContextProviderProps](./react.remirrorcontextproviderprops.md) |  |
|  [RemirrorEventListenerParams](./react.remirroreventlistenerparams.md) |  |
|  [RemirrorGetterParams](./react.remirrorgetterparams.md) |  |
|  [RemirrorProps](./react.remirrorprops.md) |  |
|  [RemirrorProviderProps](./react.remirrorproviderprops.md) |  |
|  [RemirrorState](./react.remirrorstate.md) |  |
|  [RemirrorStateListenerParams](./react.remirrorstatelistenerparams.md) |  |
|  [UpdateStateParams](./react.updatestateparams.md) |  |
|  [UsePositionerParams](./react.usepositionerparams.md) |  |

## Variables

|  Variable | Description |
|  --- | --- |
|  [bubblePositioner](./react.bubblepositioner.md) | Render a centered bubble menu which becomes active whenever a selection is made. |
|  [defaultPositioner](./react.defaultpositioner.md) |  |
|  [floatingPositioner](./react.floatingpositioner.md) | Render a menu which floats to the right at the beginning of an empty paragraph |
|  [getManagerFromComponentTree](./react.getmanagerfromcomponenttree.md) | Retrieve the extension manager from your remirror component tree. |
|  [ManagedRemirrorProvider](./react.managedremirrorprovider.md) | Renders the content while pulling the manager from the context and passing it on to the RemirrorProvider.<!-- -->If no manager exists the child components are not rendered. |
|  [popupMenuPositioner](./react.popupmenupositioner.md) | Render a menu that is inline with the first character of the selection. |
|  [RemirrorExtension](./react.remirrorextension.md) | This component creates an extension that will be picked up by a parent RemirrorManager. |
|  [RemirrorProvider](./react.remirrorprovider.md) | The RemirrorProvider which injects context into it's child component. |
|  [usePositioner](./react.usepositioner.md) | Hooks to receive the positioner props and add them to your component
```ts
import { bubblePositioner } from '@remirror/react';

const MenuComponent: FC = () => {
  const { isActive, bottom, left } = usePositioner({positionerId: 'bubbleMenu', positioner: bubblePositioner })

  return (
    <div style={{ bottom, left }}>
      <MenuIcon {...properties} />
    </div>
  );
}

<RemirrorProvider extensions={[]}>
  <MenuComponent />
</RemirrorProvider>

```
 |
|  [useRemirrorContext](./react.useremirrorcontext.md) | This provides access to the Remirror Editor context using hooks.
```ts
import { RemirrorProvider, useRemirrorContext } from 'remirror';

function HooksComponent(props) {
  // This pull the remirror props out from the context.
  const { getPositionerProps } = useRemirrorContext();

  return <Menu {...getPositionerProps()} />;
}

class App extends Component {
  render() {
    return (
      <RemirrorProvider>
        <HooksComponent />
      </RemirrorProvider>
    );
  }
}

```
 |
|  [useRemirrorManager](./react.useremirrormanager.md) | A low level context picker to obtain the manager from within a RemirrorManager context |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [AttributePropFunction](./react.attributepropfunction.md) |  |
|  [CalculatePositionerParams](./react.calculatepositionerparams.md) |  |
|  [GetPositionerPropsConfig](./react.getpositionerpropsconfig.md) |  |
|  [GetPositionerReturn](./react.getpositionerreturn.md) |  |
|  [PositionerMapValue](./react.positionermapvalue.md) |  |
|  [PositionerProps](./react.positionerprops.md) |  |
|  [RefKeyRootProps](./react.refkeyrootprops.md) |  |
|  [RemirrorEventListener](./react.remirroreventlistener.md) |  |
|  [RemirrorExtensionProps](./react.remirrorextensionprops.md) |  |
|  [RenderPropFunction](./react.renderpropfunction.md) | A function that takes the injected remirror params and returns JSX to render. |

