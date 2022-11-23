# Word Finder - Developer Case Study

## Task WordFinder
* Let `L` be a list of words made of letters from the classical latin alphabet `A: string[] = ['a', 'b', 'c', ..., 'z']`.

* Let `s` be a word of at most twelve letters from the alphabet `A`.

* Consider the function `longestWord` that, given a word `s`, returns the longest word from `L` that can be obtained using a subset of the letters from `s`. The goal of this exercise is to write a class called `WordFinder` that efficiently implements this function.

* For example, given `L: string[] = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']` and `s: string = 'ajsxuytcnhre'`, the function `longestWord` returns `saturn`. Note that returning `uranus` would be wrong as `s` only contains one letter `u`.

### Example Template in TypeScript
```ts
const dictionaryList = /* TODO */;
const longestWord = (/* TODO */): string => { /* TODO */ };

class TaskWordFinder {
  public longest: string;

  public longestWordFinder(/* TODO */) {
    // TODO
    this.longest = longestWord(/* TODO */);
    // TODO
  }
}
```

* Please:

  * Create a constant `dictionaryList` as the dictionary collection. This collection should contain a list `L` of words, with a single word per line.

  * Write a function `longestWord` that implements the following:
    * Taking as argument a word `s` of at most twelve letters from `A`, and returning the longest word from `L` that can be build using the letters from `s`. If several words with the same longest length can be build, the method should simply return one of them.

  * Write a class `TaskWordFinder` whose `longestWordFinder` method takes two arguments:
    * A local file name giving the dictionary of words to choose from. As an example, you can use the file: [https://goo.gl/aoEr9Q](https://goo.gl/aoEr9Q).
    * A word of at most twelve letters from the alphabet `A`.

  * The `longestWordFinder` method should save the longest word from the dictionary using the letters of the input word.

  * Do not write comments.

  * Provide an `efficient` solution in either TypeScript or JavaScript

* In order to implement an optimal solution, it is important to choose the most suitable data structures and algorithms. Feel free to use any structure coming with the standard SDK of the coding language you chose.

* Example input: `google-10000-english.txt optonoceari` Example output: `cooperation`.

* Please make sure that the code compiles and runs “as is” using the standard command line programs (e.g. node) and provide the commands required to compile and run your code.