Have the function `StringMerge(str)` read the str parameter being passed which will contain a large string of alphanumeric characters with a single asterisk character splitting the string evenly into two separate strings.

Your goal is to return a new string by pairing up the characters in the corresponding locations in both strings. For example: if str is `"abc1*kyoo"` then your program should return the string `akbyco1o` because a pairs with k, b pairs with y, etc.

The string will always split evenly with the asterisk in the center.

Once your function is working, take the final output string and remove any characters (case-insensitive) from it that appear in your ChallengeToken. If the new final string is empty, return the string `EMPTY`.

Your ChallengeToken: `l2gojz7e9`