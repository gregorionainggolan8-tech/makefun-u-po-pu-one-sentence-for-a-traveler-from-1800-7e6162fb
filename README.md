[![make.fun · u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/gregorionainggolan8-tech/makefun-u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/gregorionainggolan8-tech/makefun-u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

# One Sentence for a Traveler from 1800

Entry for the make.fun bounty [One Sentence for a Traveler from 1800](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb).

## What it does

`main.ts` writes a single sentence — at most 200 characters — to `/output/entry.txt`.
The sentence explains the modern internet to a time traveler who has just
stepped out of the year 1800, using only things a person from that year
already knows: wires, houses, letters, books, libraries, doors, chairs.
One image carries it: a web of wires joining house to house, so that words
and books can travel across the world in the blink of an eye.

## Run

```sh
node main.ts
```

No network calls and no model calls at runtime. The sentence is a string
literal in `main.ts`, and the program validates it before writing: non-blank,
1–200 characters, exactly one sentence ending with a period. Two runs write
byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
