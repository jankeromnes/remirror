import { EditorSchema } from '@remirror/core';
import { TaggedProsemirrorNode } from 'prosemirror-test-builder';
import { EditorView } from 'prosemirror-view';
/**
 * Tests that a command run transform the nodes from one state to another.
 * The second state is optional if nothing has changed.
 */
export interface CommandTransformation<GSchema extends EditorSchema = any> {
  /**
   * The initial prosemirror node.
   *
   * ```ts
   * import { doc, p, strong} from 'jest-prosemirror';
   *
   * const from = doc(p('Hello ', strong('Friend')));
   * ```
   */
  from: TaggedProsemirrorNode<GSchema>;

  /**
   * The output of the command transformation.
   *
   * ```ts
   * import { doc, p, strong} from 'jest-prosemirror';
   *
   * const to = doc(p(strong('Friend')));
   * ```
   *
   * This is optional and can be omitted if the transformation doesn't produce
   * any results.
   */
  to?: TaggedProsemirrorNode<GSchema>;
}

export interface TaggedDocParams<GSchema extends EditorSchema = any> {
  /**
   * A tagged ProsemirrorNode which can hold cursor information from the passed in text.
   */
  taggedDoc: TaggedProsemirrorNode<GSchema>;
}

export interface TestEditorView<GSchema extends EditorSchema = any> extends EditorView<GSchema> {
  dispatchEvent(event: string | CustomEvent | { type: string }): void;
  domObserver: {
    flush: () => void;
  };
}

export interface TestEditorViewParams<GSchema extends EditorSchema = any> {
  /**
   * An instance of the test editor view which allows for dispatching events
   * and also containers TaggedProsemirrorNodes
   */
  view: TestEditorView<GSchema>;
}
