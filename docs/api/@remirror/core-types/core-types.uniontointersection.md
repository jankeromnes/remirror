<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core-types](./core-types.md) &gt; [UnionToIntersection](./core-types.uniontointersection.md)

## UnionToIntersection type

A magical utility which maps a union type to an intersection type using TypeScript KungFu Taken from https://stackoverflow.com/a/50375286/2172153

<b>Signature:</b>

```typescript
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
```
