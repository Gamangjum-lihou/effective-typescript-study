# 📚 effective-typescript-study

![image](https://user-images.githubusercontent.com/76567238/208331585-c19851eb-ce0e-4615-ba93-04b83537567e.png)

---
## 📅 일정
> **1주차** ( 12 / 23 ~ 12 / 29 )
> | DAY 1 (금, 토) | DAY 2 (월, 화) | DAY 3 (수, 목) |
> | :-:| :-: | :-: |
> | Item 1 | Item 2 | Item 3 |

---

> **2주차** ( 1 / 2 ~ 1 / 7 )       

Item 4  ~ Item 7

<br>

---

> **3주차** ( 1 / 9 ~ 1 / 15 ) 

> | Item 8 | Item 9 | Item 10 | Item 11 |
> | :-:| :-: | :-: | :-: | 
> | 강철원 | 신현호 | 김민재 | 이예슬 |
<br>

---


> **4주차** ( 1 / 16 ~ 1 / 20 ) 

> | Item 12 | Item 13 | Item 14 | Item 15 |
> | :-:| :-: | :-: | :-: | 
> | 신현호 | 이예슬 | 강철원 | 김민재 |
<br>

> **4주차** ( 1 / 16 ~ 1 / 20 ) 

> | Item 16, 21, 24 | Item 17, 22 | Item 18, 25 | Item 19, 20 |
> | :-:| :-: | :-: | :-: | 
> | 강철원 | 신현호 | 김민재 | 이예슬 |
<br>


---

## ✅ 체크리스트 ( 5명 )

| 이름                                                    | 1주차 | 2주차 | 3주차 | 4주차 | 5주차 | 6주차 |
| ------------------------------------------------------ |:--: | :--: | :--: | :--: | :--: | :--: |
| <center>[강철원](https://github.com/Ryan-dia)</center>  |  ✅  |   ✅  |  ✅ | ✅ |
| <center>[김민재](https://github.com/D0Dam)</center>     |  ✅  |  ✅  |  ✅  | ✅ |
| <center>[신현호](https://github.com/SWARVY)</center>    |  ✅  |  ✅  |  ✅  | ✅ |
| <center>[이예슬](https://github.com/Leemainsw)</center> |  ✅  |  ✅  |  ✅  | ✅ |

____

## Code Samples (source : [링크](https://github.com/danvk/effective-typescript))

Below you'll find a complete table of contents with links to standalone code samples for each item. All code samples should produce the expected errors (and no others) and expected types.

Unless otherwise noted in a comment at the top of the code sample, the samples are run with TypeScript's `strict` setting. These were produced and checked using [literate-ts][] and TypeScript 3.7.0-beta. You may want to copy/paste them into the [TypeScript playground][play].

- **Chapter 1: Getting to Know TypeScript**
  - [:memo: Item 1][Item 1]: Understand the Relationship Between TypeScript and JavaScript
  - [:memo: Item 2][Item 2]: Know Which TypeScript Options You’re Using
  - [:memo: Item 3][Item 3]: Understand That Code Generation Is Independent of Types
  - [:memo: Item 4][Item 4]: Get Comfortable with Structural Typing
  - [:memo: Item 5][Item 5]: Limit Use of the any Type

- **Chapter 2: TypeScript’s Type System**
  - [:memo: Item 6][Item 6]: Use Your Editor to Interrogate and Explore the Type System
  - [:memo: Item 7][Item 7]: Think of Types as Sets of Values
  - [:memo: Item 8][Item 8]: Know How to Tell Whether a Symbol Is in the Type Space or Value Space
  - [:memo: Item 9][Item 9]: Prefer Type Declarations to Type Assertions
  - [:memo: Item 10][Item 10]: Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt)
  - [:memo: Item 11][Item 11]: Recognize the Limits of Excess Property Checking
  - [:memo: Item 12][Item 12]: Apply Types to Entire Function Expressions When Possible
  - [:memo: Item 13][Item 13]: Know the Differences Between type and interface
  - [:memo: Item 14][Item 14]: Use Type Operations and Generics to Avoid Repeating Yourself
  - [:memo: Item 15][Item 15]: Use Index Signatures for Dynamic Data
  - [:memo: Item 16][Item 16]: Prefer Arrays, Tuples, and ArrayLike to number Index Signatures
  - [:memo: Item 17][Item 17]: Use readonly to Avoid Errors Associated with Mutation
  - [:memo: Item 18][Item 18]: Use Mapped Types to Keep Values in Sync

- **Chapter 3: Type Inference**
  - [:memo: Item 19][Item 19]: Avoid Cluttering Your Code with Inferable Types
  - [:memo: Item 20][Item 20]: Use Different Variables for Different Types
  - [:memo: Item 21][Item 21]: Understand Type Widening
  - [:memo: Item 22][Item 22]: Understand Type Narrowing
  - [:memo: Item 23][Item 23]: Create Objects All at Once
  - [:memo: Item 24][Item 24]: Be Consistent in Your Use of Aliases
  - [:memo: Item 25][Item 25]: Use async Functions Instead of Callbacks for Asynchronous Code
  - [:memo: Item 26][Item 26]: Understand How Context Is Used in Type Inference
  - [:memo: Item 27][Item 27]: Use Functional Constructs and Libraries to Help Types Flow

- **Chapter 4: Type Design**
  - [:memo: Item 28][Item 28]: Prefer Types That Always Represent Valid States
  - [:memo: Item 29][Item 29]: Be Liberal in What You Accept and Strict in What You Produce
  - [:memo: Item 30][Item 30]: Don’t Repeat Type Information in Documentation
  - [:memo: Item 31][Item 31]: Push Null Values to the Perimeter of Your Types
  - [:memo: Item 32][Item 32]: Prefer Unions of Interfaces to Interfaces of Unions
  - [:memo: Item 33][Item 33]: Prefer More Precise Alternatives to String Types
  - [:memo: Item 34][Item 34]: Prefer Incomplete Types to Inaccurate Types
  - [:memo: Item 35][Item 35]: Generate Types from APIs and Specs, Not Data
  - [:memo: Item 36][Item 36]: Name Types Using the Language of Your Problem Domain
  - [:memo: Item 37][Item 37]: Consider “Brands” for Nominal Typing

- **Chapter 5: Working with any**
  - [:memo: Item 38][Item 38]: Use the Narrowest Possible Scope for any Types
  - [:memo: Item 39][Item 39]: Prefer More Precise Variants of any to Plain any
  - [:memo: Item 40][Item 40]: Hide Unsafe Type Assertions in Well-Typed Functions
  - [:memo: Item 41][Item 41]: Understand Evolving any
  - [:memo: Item 42][Item 42]: Use unknown Instead of any for Values with an Unknown Type
  - [:memo: Item 43][Item 43]: Prefer Type-Safe Approaches to Monkey Patching
  - [:memo: Item 44][Item 44]: Track Your Type Coverage to Prevent Regressions in Type Safety

- **Chapter 6: Types Declarations and @types**
  - :memo: Item 45: Put TypeScript and @types in devDependencies
  - :memo: Item 46: Understand the Three Versions Involved in Type Declarations
  - [:memo: Item 47][Item 47]: Export All Types That Appear in Public APIs
  - [:memo: Item 48][Item 48]: Use TSDoc for API Comments
  - [:memo: Item 49][Item 49]: Provide a Type for this in Callbacks
  - [:memo: Item 50][Item 50]: Prefer Conditional Types to Overloaded Declarations
  - [:memo: Item 51][Item 51]: Mirror Types to Sever Dependencies
  - [:memo: Item 52][Item 52]: Be Aware of the Pitfalls of Testing Types

- **Chapter 7: Writing and Running Your Code**
  - [:memo: Item 53][Item 53]: Prefer ECMAScript Features to TypeScript Features
  - [:memo: Item 54][Item 54]: Know How to Iterate Over Objects
  - [:memo: Item 55][Item 55]: Understand the DOM hierarchy
  - [:memo: Item 56][Item 56]: Don’t Rely on Private to Hide Information
  - [:memo: Item 57][Item 57]: Use Source Maps to Debug TypeScript

- **Chapter 8. Migrating to TypeScript**
  - [:memo: Item 58][Item 58]: Write Modern JavaScript
  - [:memo: Item 59][Item 59]: Use @ts-check and JSDoc to Experiment with TypeScript
  - :memo: Item 60: Use allowJs to Mix TypeScript and JavaScript
  - [:memo: Item 61][Item 61]: Convert Module by Module Up Your Dependency Graph
  - [:memo: Item 62][Item 62]: Don’t Consider Migration Complete Until You Enable noImplicitAny

[o]: https://www.oreilly.com/library/view/effective-typescript/9781492053736/
[a]: https://amzn.to/38s1oCK
[ebook]: https://www.ebooks.com/en-us/209820951/effective-typescript/dan-vanderkam/?_c=1
[literate-ts]: https://github.com/danvk/literate-ts
[play]: https://www.typescriptlang.org/play/

[Item 1]: https://github.com/danvk/effective-typescript/tree/master/samples/ch01-intro/item-01-ts-vs-js
[Item 2]: https://github.com/danvk/effective-typescript/tree/master/samples/ch01-intro/item-02-which-ts
[Item 3]: https://github.com/danvk/effective-typescript/tree/master/samples/ch01-intro/item-03-independent
[Item 4]: https://github.com/danvk/effective-typescript/tree/master/samples/ch01-intro/item-04-structural
[Item 5]: https://github.com/danvk/effective-typescript/tree/master/samples/ch01-intro/item-05-any

[Item 6]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-06-editor
[Item 7]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-07-types-as-sets
[Item 8]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-08-type-value-space
[Item 9]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-09-prefer-declarations-to-assertions
[Item 10]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-10-avoid-object-wrapper-types
[Item 11]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-11-excess-property-checking
[Item 12]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-12-type-entire-functions
[Item 13]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-13-type-vs-interface
[Item 14]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-14-map-between-types
[Item 15]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-15-index-for-dynamic
[Item 16]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-16-number-index
[Item 17]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-17-readonly
[Item 18]: https://github.com/danvk/effective-typescript/tree/master/samples/ch02-types/item-18-values-in-sync

[Item 19]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-19-avoid-inferable
[Item 20]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-20-one-var-one-type
[Item 21]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-21-widening
[Item 22]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-22-narrowing
[Item 23]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-23-all-at-once
[Item 24]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-24-avoid-aliasing
[Item 25]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-25-use-async-await
[Item 26]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-26-context-inference
[Item 27]: https://github.com/danvk/effective-typescript/tree/master/samples/ch03-inference/item-27-well-typed-libs

[Item 28]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-28-valid-states
[Item 29]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-29-loose-accept-strict-produce
[Item 30]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-30-jsdoc-repeat
[Item 31]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-31-null-values-to-perimeter
[Item 32]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-32-union-of-interfaces
[Item 33]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-33-avoid-strings
[Item 34]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-34-incomplete-over-innacurate
[Item 35]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-35-consider-codegen
[Item 36]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-36-language-of-domain
[Item 37]: https://github.com/danvk/effective-typescript/tree/master/samples/ch04-design/item-37-brands

[Item 38]: https://github.com/danvk/effective-typescript/tree/master/samples/ch05-any/item-38-narrowest-any
[Item 39]: https://github.com/danvk/effective-typescript/tree/master/samples/ch05-any/item-39-specific-any
[Item 40]: https://github.com/danvk/effective-typescript/tree/master/samples/ch05-any/item-40-hide-unsafe-casts
[Item 41]: https://github.com/danvk/effective-typescript/tree/master/samples/ch05-any/item-41-evolving-any
[Item 42]: https://github.com/danvk/effective-typescript/tree/master/samples/ch05-any/item-42-never-unknown
[Item 43]: https://github.com/danvk/effective-typescript/tree/master/samples/ch05-any/item-43-type-safe-monkey
[Item 44]: https://github.com/danvk/effective-typescript/tree/master/samples/ch05-any/item-44-type-percentage

[Item 47]: https://github.com/danvk/effective-typescript/tree/master/samples/ch06-declarations/item-47-export-your-types
[Item 48]: https://github.com/danvk/effective-typescript/tree/master/samples/ch06-declarations/item-48-use-tsdoc
[Item 49]: https://github.com/danvk/effective-typescript/tree/master/samples/ch06-declarations/item-49-this-in-callbacks
[Item 50]: https://github.com/danvk/effective-typescript/tree/master/samples/ch06-declarations/item-50-conditional-overload
[Item 51]: https://github.com/danvk/effective-typescript/tree/master/samples/ch06-declarations/item-51-mirror-types-for-deps
[Item 52]: https://github.com/danvk/effective-typescript/tree/master/samples/ch06-declarations/item-52-test-your-types

[Item 53]: https://github.com/danvk/effective-typescript/tree/master/samples/ch07-write-run/item-53-avoid-non-ecma
[Item 54]: https://github.com/danvk/effective-typescript/tree/master/samples/ch07-write-run/item-54-iterate-objects
[Item 55]: https://github.com/danvk/effective-typescript/tree/master/samples/ch07-write-run/item-55-understand-the-dom
[Item 56]: https://github.com/danvk/effective-typescript/tree/master/samples/ch07-write-run/item-56-private-rely
[Item 57]: https://github.com/danvk/effective-typescript/tree/master/samples/ch07-write-run/item-57-source-maps-debug

[Item 58]: https://github.com/danvk/effective-typescript/tree/master/samples/ch08-migrate/item-58-write-modern-js
[Item 59]: https://github.com/danvk/effective-typescript/tree/master/samples/ch08-migrate/item-59-jsdoc-tscheck
[Item 61]: https://github.com/danvk/effective-typescript/tree/master/samples/ch08-migrate/item-61-convert-up-the-graph
[Item 62]: https://github.com/danvk/effective-typescript/tree/master/samples/ch08-migrate/item-62-start-loose

