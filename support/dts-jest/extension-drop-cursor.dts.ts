import { HelpersFromExtensions } from '@remirror/core';
import { DropCursorExtension } from '@remirror/extension-drop-cursor';

type DropCursorExtensionHelpers = HelpersFromExtensions<DropCursorExtension>;
const cursorHelpers: DropCursorExtensionHelpers = {} as any;

// @dts-jest:pass:snap
cursorHelpers.isDragging();
