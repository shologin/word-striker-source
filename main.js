function _0xa8de(_0x324ff6, _0x17c0b2) {
  const _0xd3e5c5 = _0xd3e5();
  return (
    (_0xa8de = function (_0xa8dec7, _0x24881a) {
      _0xa8dec7 = _0xa8dec7 - 0x136;
      let _0xd27ae6 = _0xd3e5c5[_0xa8dec7];
      return _0xd27ae6;
    }),
    _0xa8de(_0x324ff6, _0x17c0b2)
  );
}
const _0x34fbf1 = _0xa8de;
(function (_0x41c87f, _0x390970) {
  const _0x20de3c = _0xa8de,
    _0x270634 = _0x41c87f();
  while (!![]) {
    try {
      const _0x58ae2b =
        parseInt(_0x20de3c(0x187)) / 0x1 +
        parseInt(_0x20de3c(0x218)) / 0x2 +
        -parseInt(_0x20de3c(0x144)) / 0x3 +
        parseInt(_0x20de3c(0x20e)) / 0x4 +
        (-parseInt(_0x20de3c(0x1d2)) / 0x5) * (parseInt(_0x20de3c(0x1b3)) / 0x6) +
        parseInt(_0x20de3c(0x1fa)) / 0x7 +
        (-parseInt(_0x20de3c(0x1c5)) / 0x8) * (parseInt(_0x20de3c(0x1af)) / 0x9);
      if (_0x58ae2b === _0x390970) break;
      else _0x270634["push"](_0x270634["shift"]());
    } catch (_0x3034d4) {
      _0x270634["push"](_0x270634["shift"]());
    }
  }
})(_0xd3e5, 0xe7bf7);
class t {
  constructor({ position: _0x2e7ecd, velocity: _0x62842b, text: _0x3e5159 }) {
    const _0x59c739 = _0xa8de;
    (this[_0x59c739(0x149)] = _0x2e7ecd),
      (this[_0x59c739(0x190)] = _0x62842b),
      (this[_0x59c739(0x182)] = _0x3e5159),
      (this[_0x59c739(0x14c)] = {
        x: l[_0x59c739(0x1d3)](this[_0x59c739(0x182)])["width"] + 0xa,
        y:
          l[_0x59c739(0x1d3)](this[_0x59c739(0x182)])["width"] / 1.5 > 0x14
            ? l[_0x59c739(0x1d3)](this[_0x59c739(0x182)])["width"] / 1.5
            : 0x14,
      }),
      (this[_0x59c739(0x19e)] = 0x0),
      (this[_0x59c739(0x1ed)] = {
        fillStyle: _0x59c739(0x1c4),
        shadowColor: "white",
        shadowOffsetY: 0x2,
        shadowBlur: 0x8,
        strokeStyle: "#6da5c0",
        lineWidth: 0x2,
        font: _0x59c739(0x212),
        hitText: "#EC9704",
        normalText: _0x59c739(0x1cf),
        normalShadowColor: _0x59c739(0x197),
        normalStrokeStyle: _0x59c739(0x1cf),
        hitShadowColor: _0x59c739(0x1f4),
        hitStrokeStyle: _0x59c739(0x19c),
        destroyedShadowColor: _0x59c739(0x18d),
        destroyedStrokeStyle: _0x59c739(0x136),
      });
  }
  [_0x34fbf1(0x13e)]() {
    const _0x42ab0f = _0x34fbf1;
    l[_0x42ab0f(0x13a)](),
      l["beginPath"](),
      (l["fillStyle"] = this[_0x42ab0f(0x1ed)]["fillStyle"]),
      l[_0x42ab0f(0x1e2)](
        this["position"]["x"],
        this["position"]["y"],
        this[_0x42ab0f(0x14c)]["x"],
        this[_0x42ab0f(0x14c)]["y"],
        0x0,
        0x2 * Math["PI"],
        0x168
      ),
      l[_0x42ab0f(0x1c1)](),
      (l["shadowColor"] = this[_0x42ab0f(0x1ed)][_0x42ab0f(0x210)]),
      (l[_0x42ab0f(0x17b)] = this[_0x42ab0f(0x1ed)][_0x42ab0f(0x17b)]),
      (l[_0x42ab0f(0x165)] = this["style"][_0x42ab0f(0x165)]),
      (l[_0x42ab0f(0x18e)] = this[_0x42ab0f(0x1ed)]["strokeStyle"]),
      (l["lineWidth"] = this["style"][_0x42ab0f(0x1c9)]),
      l[_0x42ab0f(0x140)](),
      l["closePath"](),
      l[_0x42ab0f(0x13c)](),
      l[_0x42ab0f(0x13a)](),
      (l[_0x42ab0f(0x1eb)] = this[_0x42ab0f(0x1ed)][_0x42ab0f(0x1eb)]);
    let _0x208614 = this[_0x42ab0f(0x149)]["x"] - this[_0x42ab0f(0x14c)]["x"] + 0xa;
    for (let _0x538791 = 0x0; _0x538791 < this[_0x42ab0f(0x182)]["length"]; _0x538791++) {
      const _0x33b82f = this[_0x42ab0f(0x182)][_0x538791];
      _0x538791 < this[_0x42ab0f(0x19e)]
        ? (l[_0x42ab0f(0x1b5)] = this[_0x42ab0f(0x1ed)][_0x42ab0f(0x1ab)])
        : (l["fillStyle"] = this["style"][_0x42ab0f(0x181)]),
        l[_0x42ab0f(0x219)](_0x33b82f, _0x208614, this["position"]["y"] + 0x5),
        (_0x208614 += l[_0x42ab0f(0x1d3)](_0x33b82f)[_0x42ab0f(0x1b0)]);
    }
    l["restore"]();
  }
  ["update"]() {
    const _0x1ab068 = _0x34fbf1;
    this[_0x1ab068(0x13e)](),
      (this[_0x1ab068(0x149)]["x"] += this["velocity"]["x"]),
      (this[_0x1ab068(0x149)]["y"] += this["velocity"]["y"]);
  }
  ["increaseLetterIndex"]() {
    const _0x12c464 = _0x34fbf1;
    this[_0x12c464(0x19e)]++;
  }
  [_0x34fbf1(0x172)]() {
    const _0x1dea75 = _0x34fbf1;
    this[_0x1dea75(0x19e)] === this["text"][_0x1dea75(0x145)]
      ? ((this[_0x1dea75(0x1ed)][_0x1dea75(0x1b5)] = _0x1dea75(0x1d4)),
        (this[_0x1dea75(0x1ed)][_0x1dea75(0x210)] = this[_0x1dea75(0x1ed)][_0x1dea75(0x18c)]),
        (this["style"][_0x1dea75(0x18e)] = this[_0x1dea75(0x1ed)][_0x1dea75(0x1fe)]))
      : ((this[_0x1dea75(0x1ed)][_0x1dea75(0x210)] = this[_0x1dea75(0x1ed)][_0x1dea75(0x171)]),
        (this[_0x1dea75(0x1ed)][_0x1dea75(0x18e)] = this["style"][_0x1dea75(0x19f)])),
      setTimeout(() => {
        const _0x555920 = _0x1dea75;
        (this["style"][_0x555920(0x210)] = this[_0x555920(0x1ed)][_0x555920(0x168)]),
          (this["style"][_0x555920(0x18e)] = this[_0x555920(0x1ed)][_0x555920(0x20a)]);
      }, 0x12c);
  }
}
class e {
  constructor() {
    const _0x552a5f = _0x34fbf1;
    (this[_0x552a5f(0x216)] = 0x0), (this["velocityY"] = 0x2 * n[_0x552a5f(0x13d)]);
  }
  [_0x34fbf1(0x13e)]() {
    const _0x340a37 = _0x34fbf1;
    l[_0x340a37(0x1de)](),
      (l[_0x340a37(0x1b5)] = "#05161a"),
      l[_0x340a37(0x154)](0x0, this[_0x340a37(0x216)], n["width"], n[_0x340a37(0x13d)]),
      l[_0x340a37(0x19a)]();
  }
  [_0x34fbf1(0x1a7)]() {
    const _0x38fbab = _0x34fbf1;
    this["draw"](), this[_0x38fbab(0x216)] < n[_0x38fbab(0x13d)] && (this[_0x38fbab(0x216)] += this[_0x38fbab(0x141)]);
  }
}
class i {
  constructor({ scores: _0xda7b0, lives: _0x4cf710, dictionaryName: _0x28dce0 }) {
    const _0x5905c5 = _0x34fbf1;
    (this[_0x5905c5(0x1ed)] = { fillStyle: _0x5905c5(0x18d), shadowColor: _0x5905c5(0x18d) }),
      (this[_0x5905c5(0x1d6)] = !0x1),
      (this["__scores"] = _0xda7b0),
      (this[_0x5905c5(0x1b2)] = _0x4cf710),
      (this[_0x5905c5(0x164)] = _0x28dce0),
      (this[_0x5905c5(0x1fc)] = localStorage["getItem"](this["__dictionaryName"] + "_high_score") || 0x0);
  }
  #t() {
    const _0x593673 = _0x34fbf1;
    l[_0x593673(0x13a)](),
      l[_0x593673(0x1de)](),
      (l[_0x593673(0x18e)] = this["style"][_0x593673(0x1b5)]),
      (l[_0x593673(0x1c9)] = 0x3),
      (l[_0x593673(0x210)] = this[_0x593673(0x1ed)]["shadowColor"]),
      (l[_0x593673(0x165)] = 0x5),
      l[_0x593673(0x186)](0x0, 0x0, n[_0x593673(0x1b0)], n[_0x593673(0x13d)]),
      l["stroke"](),
      l[_0x593673(0x19a)](),
      l[_0x593673(0x13c)]();
  }
  [_0x34fbf1(0x1a7)]() {
    this.#e();
  }
  #e() {
    const _0x333148 = _0x34fbf1;
    this[_0x333148(0x1d6)] &&
      (this.#t(),
      setTimeout(() => {
        const _0x381237 = _0x333148;
        this[_0x381237(0x1d6)] = !0x1;
      }, 0x1f4));
  }
  ["bubbleMissed"]() {
    const _0x523c58 = _0x34fbf1;
    (this[_0x523c58(0x1d6)] = !0x0), this.#e();
  }
  [_0x34fbf1(0x161)](_0x3e3ea3) {
    const _0x25925c = _0x34fbf1;
    this[_0x25925c(0x1bf)] += _0x3e3ea3;
  }
  [_0x34fbf1(0x1a0)]() {
    const _0x376246 = _0x34fbf1;
    return this[_0x376246(0x1bf)];
  }
  ["setLives"](_0x40bbe5) {
    this["__lives"] += _0x40bbe5;
  }
  [_0x34fbf1(0x175)]() {
    const _0x28eb63 = _0x34fbf1;
    if (-0x1 === this[_0x28eb63(0x1b2)]) return !0x1;
    let _0x1aa74d = "\x20";
    for (let _0x133560 = 0x0; _0x133560 < this[_0x28eb63(0x1b2)]; _0x133560++) _0x1aa74d += _0x28eb63(0x193);
    return _0x1aa74d;
  }
  [_0x34fbf1(0x202)]() {
    const _0x53681c = _0x34fbf1;
    return this[_0x53681c(0x1bf)] > this[_0x53681c(0x1fc)]
      ? (this.#i(this[_0x53681c(0x1bf)]), this["__highScore"] + _0x53681c(0x1e1))
      : this["__highScore"];
  }
  #i(_0x2b399e) {
    const _0x2de118 = _0x34fbf1;
    localStorage[_0x2de118(0x15d)](this[_0x2de118(0x164)] + _0x2de118(0x217), _0x2b399e), (this["__highScore"] = _0x2b399e);
  }
}
class s {
  constructor({ position: _0x4d89ca, radius: _0x50fb72 }) {
    const _0x2d901c = _0x34fbf1;
    (this[_0x2d901c(0x149)] = _0x4d89ca),
      (this[_0x2d901c(0x14c)] = _0x50fb72),
      (this[_0x2d901c(0x1ed)] = {
        fillStyle: _0x2d901c(0x177),
        shadowColor: "rgba(6,\x2088,\x2047,\x201)",
        strokeStyle: _0x2d901c(0x1cf),
        shootShadowColor: _0x2d901c(0x1f4),
        shootStrokeStyle: _0x2d901c(0x1f4),
      });
  }
  [_0x34fbf1(0x13e)]() {
    const _0x40deb6 = _0x34fbf1;
    l[_0x40deb6(0x13a)](),
      l["beginPath"](),
      l["arc"](
        this[_0x40deb6(0x149)]["x"],
        this[_0x40deb6(0x149)]["y"] + this[_0x40deb6(0x14c)] / 0x2,
        this[_0x40deb6(0x14c)],
        0x0,
        0x2 * Math["PI"],
        !0x1
      ),
      (l[_0x40deb6(0x1b5)] = this["style"][_0x40deb6(0x1b5)]),
      l[_0x40deb6(0x1c1)](),
      (l["shadowColor"] = this[_0x40deb6(0x1ed)]["shadowColor"]),
      (l[_0x40deb6(0x166)] = 0x2),
      (l[_0x40deb6(0x165)] = 0x10),
      (l[_0x40deb6(0x18e)] = this["style"][_0x40deb6(0x18e)]),
      (l["lineWidth"] = 0x5),
      l[_0x40deb6(0x140)](),
      l[_0x40deb6(0x19a)](),
      l["restore"]();
  }
  [_0x34fbf1(0x14e)]() {
    const _0x521a99 = _0x34fbf1;
    l[_0x521a99(0x13a)](),
      l[_0x521a99(0x1de)](),
      l[_0x521a99(0x1f6)](
        this[_0x521a99(0x149)]["x"],
        this[_0x521a99(0x149)]["y"] + this[_0x521a99(0x14c)] / 0x2,
        1.25 * this[_0x521a99(0x14c)],
        0x0,
        0x2 * Math["PI"],
        !0x1
      ),
      (l[_0x521a99(0x1b5)] = this[_0x521a99(0x1ed)][_0x521a99(0x1b5)]),
      l[_0x521a99(0x1c1)](),
      (l[_0x521a99(0x210)] = this[_0x521a99(0x1ed)][_0x521a99(0x1c3)]),
      (l[_0x521a99(0x166)] = 0x2),
      (l[_0x521a99(0x165)] = 0x10),
      (l["strokeStyle"] = this[_0x521a99(0x1ed)]["shootStrokeStyle"]),
      (l["lineWidth"] = 0x5),
      l["stroke"](),
      l["closePath"](),
      l[_0x521a99(0x13c)]();
  }
}
class o {
  constructor({ position: _0x30d9d5, velocity: _0x4f7c31, rotation: _0x5e4bc8 }) {
    const _0xae1524 = _0x34fbf1;
    (this[_0xae1524(0x149)] = _0x30d9d5),
      (this[_0xae1524(0x190)] = _0x4f7c31),
      (this[_0xae1524(0x198)] = _0x5e4bc8),
      (this[_0xae1524(0x1b0)] = 0x5),
      (this["style"] = { fillStyle: _0xae1524(0x1cf) });
  }
  [_0x34fbf1(0x13e)]() {
    const _0x155585 = _0x34fbf1;
    l[_0x155585(0x13a)](),
      l[_0x155585(0x13f)](this["position"]["x"], this[_0x155585(0x149)]["y"]),
      l[_0x155585(0x1a6)](this[_0x155585(0x198)]),
      l[_0x155585(0x13f)](-this["position"]["x"], -this[_0x155585(0x149)]["y"]),
      l[_0x155585(0x1de)](),
      (l[_0x155585(0x1b5)] = this[_0x155585(0x1ed)][_0x155585(0x1b5)]),
      l[_0x155585(0x154)](this[_0x155585(0x149)]["x"], this[_0x155585(0x149)]["y"], this[_0x155585(0x1b0)], n["height"]),
      l[_0x155585(0x19a)](),
      l[_0x155585(0x13c)]();
  }
  ["update"]() {
    const _0x13a53b = _0x34fbf1;
    this["position"]["y"] < n[_0x13a53b(0x13d)] / 0x2 && (this[_0x13a53b(0x1b0)] = 0x2),
      this[_0x13a53b(0x13e)](),
      (this[_0x13a53b(0x149)]["x"] += this[_0x13a53b(0x190)]["x"]),
      (this["position"]["y"] += this[_0x13a53b(0x190)]["y"]);
  }
}
const n = document[_0x34fbf1(0x1bc)]("canvas"),
  l = n["getContext"]("2d"),
  r = document["getElementById"](_0x34fbf1(0x1f5)),
  a = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x1b6)),
  h = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x1f2)),
  d = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x1f8)),
  c = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x17e)),
  y = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x1b1)),
  u = document["getElementById"](_0x34fbf1(0x139)),
  g = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x14f)),
  p = document["getElementById"](_0x34fbf1(0x185)),
  m = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x213)),
  w = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x169)),
  S = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x176)),
  f = document["getElementById"](_0x34fbf1(0x155)),
  x = document["getElementById"]("gameOverScore"),
  v = document["getElementById"](_0x34fbf1(0x1f3)),
  _ = document[_0x34fbf1(0x1a1)](_0x34fbf1(0x1bb)),
  k = document[_0x34fbf1(0x1a1)]("gameOverMenuLinkBtn");
(n[_0x34fbf1(0x1b0)] = window[_0x34fbf1(0x1db)]), (n["height"] = window["innerHeight"]);
const b = new (class {
  constructor(_0x5e3cb1) {
    const _0x2c3968 = _0x34fbf1;
    (this["__dictionaries"] = _0x5e3cb1), (this[_0x2c3968(0x1d5)] = localStorage["getItem"](_0x2c3968(0x20b)) || "CS50");
  }
  ["renderDictionariesList"]() {
    const _0xa4f8d8 = _0x34fbf1;
    let _0x467d4a = "";
    for (let _0x599b68 in this[_0xa4f8d8(0x151)])
      _0x467d4a += _0xa4f8d8(0x201) + _0x599b68 + "\x22>" + _0x599b68 + _0xa4f8d8(0x196);
    return _0x467d4a;
  }
  [_0x34fbf1(0x1d9)](_0x39797e) {
    const _0xb04429 = _0x34fbf1;
    for (let _0x41055f in this["__dictionaries"])
      if (_0x41055f === _0x39797e)
        return (this[_0xb04429(0x1d5)] = _0x39797e), localStorage[_0xb04429(0x15d)]("dictionary", _0x39797e), !0x0;
    return console[_0xb04429(0x1ce)](_0xb04429(0x178), _0x39797e), !0x1;
  }
  [_0x34fbf1(0x15e)]() {
    const _0x4e99b7 = _0x34fbf1;
    return this["__dictionaries"][this[_0x4e99b7(0x1d5)]];
  }
  ["getDictionaryName"]() {
    const _0x33a492 = _0x34fbf1;
    return this[_0x33a492(0x1d5)];
  }
})({
  CS50: [
    _0x34fbf1(0x1d0),
    _0x34fbf1(0x147),
    _0x34fbf1(0x143),
    "C",
    _0x34fbf1(0x163),
    "HTTP",
    _0x34fbf1(0x21a),
    "IP",
    _0x34fbf1(0x1ff),
    _0x34fbf1(0x15c),
    "scratch",
    _0x34fbf1(0x206),
    _0x34fbf1(0x159),
    _0x34fbf1(0x1cc),
    "AI",
    _0x34fbf1(0x173),
    "stack",
    _0x34fbf1(0x209),
    _0x34fbf1(0x1e5),
    _0x34fbf1(0x16f),
    _0x34fbf1(0x203),
    _0x34fbf1(0x14b),
    "bootstrap",
    "HTML",
    _0x34fbf1(0x200),
    _0x34fbf1(0x1a9),
    _0x34fbf1(0x1d1),
    _0x34fbf1(0x1ca),
    _0x34fbf1(0x1fb),
    _0x34fbf1(0x195),
    "duck",
    _0x34fbf1(0x17a),
    _0x34fbf1(0x215),
    "tideman",
    "SQL",
    "ninja",
    "emoji",
    "data",
    "struct",
    _0x34fbf1(0x18f),
    "loop",
    "if",
    _0x34fbf1(0x1f9),
    "elif",
    "type",
    _0x34fbf1(0x1d8),
    "tag",
  ],
  Lorem: [
    _0x34fbf1(0x1ea),
    _0x34fbf1(0x207),
    "is",
    _0x34fbf1(0x16e),
    "dummy",
    "text",
    "of",
    _0x34fbf1(0x14d),
    _0x34fbf1(0x214),
    _0x34fbf1(0x1fd),
    _0x34fbf1(0x18b),
    _0x34fbf1(0x142),
    _0x34fbf1(0x1a2),
    _0x34fbf1(0x1a5),
    _0x34fbf1(0x1f1),
    "fact",
    _0x34fbf1(0x1e7),
    _0x34fbf1(0x1f0),
    _0x34fbf1(0x18f),
    _0x34fbf1(0x167),
    "point",
    "site",
    "year",
    "root",
    _0x34fbf1(0x16b),
    _0x34fbf1(0x1e6),
    "chunk",
    _0x34fbf1(0x1dd),
    _0x34fbf1(0x1d8),
    _0x34fbf1(0x1ae),
    "amet",
    "sed",
    "et",
    "do",
    "ut",
    "enim",
  ],
  "Guardians\x20of\x20Galaxy": [
    _0x34fbf1(0x1b8),
    _0x34fbf1(0x16d),
    _0x34fbf1(0x194),
    _0x34fbf1(0x17d),
    "Rocket",
    "Groot",
    "Awesome",
    _0x34fbf1(0x21b),
    _0x34fbf1(0x174),
    _0x34fbf1(0x179),
    _0x34fbf1(0x15f),
    _0x34fbf1(0x204),
    _0x34fbf1(0x19d),
    _0x34fbf1(0x1d7),
    _0x34fbf1(0x1cb),
    _0x34fbf1(0x158),
    _0x34fbf1(0x1c8),
    _0x34fbf1(0x1ad),
    _0x34fbf1(0x1bd),
    _0x34fbf1(0x1e8),
    _0x34fbf1(0x1c0),
    _0x34fbf1(0x150),
    _0x34fbf1(0x211),
    "Sovereign",
    _0x34fbf1(0x1b7),
    "Knowhere",
    "Kree",
    "Blaster",
    "Mask",
    "Vengeance",
    _0x34fbf1(0x1ba),
    "Xandar",
    "Gadget",
    _0x34fbf1(0x1c8),
    _0x34fbf1(0x188),
    _0x34fbf1(0x18a),
    _0x34fbf1(0x20f),
    _0x34fbf1(0x183),
    "Ship",
    _0x34fbf1(0x1b4),
    _0x34fbf1(0x1ef),
    _0x34fbf1(0x1c0),
    "Whistle",
  ],
});
function L() {
  const _0x1f91d0 = _0x34fbf1;
  (n[_0x1f91d0(0x1ed)][_0x1f91d0(0x191)] = _0x1f91d0(0x180)),
    (f[_0x1f91d0(0x1ed)][_0x1f91d0(0x191)] = "none"),
    (a["style"][_0x1f91d0(0x191)] = _0x1f91d0(0x180)),
    (c[_0x1f91d0(0x1ed)][_0x1f91d0(0x191)] = _0x1f91d0(0x180)),
    (r["style"][_0x1f91d0(0x191)] = "block"),
    (g[_0x1f91d0(0x1ed)][_0x1f91d0(0x191)] = _0x1f91d0(0x208)),
    (m["innerHTML"] = b["renderDictionariesList"]()),
    (m["value"] = b[_0x1f91d0(0x1a4)]());
}
function C() {
  const _0x26c0dd = _0x34fbf1;
  if (_0x26c0dd(0x20d) !== p[_0x26c0dd(0x1e9)]) return;
  (n["style"]["display"] = _0x26c0dd(0x192)),
    (r[_0x26c0dd(0x1ed)][_0x26c0dd(0x191)] = "none"),
    (g["style"][_0x26c0dd(0x191)] = "none"),
    (f[_0x26c0dd(0x1ed)]["display"] = _0x26c0dd(0x180)),
    (a[_0x26c0dd(0x1ed)][_0x26c0dd(0x191)] = _0x26c0dd(0x192)),
    (c[_0x26c0dd(0x1ed)][_0x26c0dd(0x191)] = _0x26c0dd(0x192));
  const _0x17b620 = new i({ scores: 0x0, lives: 0x3, dictionaryName: b[_0x26c0dd(0x1a4)]() }),
    _0x8f1111 = new s({ position: { x: n[_0x26c0dd(0x1b0)] / 0x2, y: n[_0x26c0dd(0x13d)] }, radius: 0x7d }),
    _0x49e037 = new e(),
    _0x420e92 = b[_0x26c0dd(0x15e)]();
  (h[_0x26c0dd(0x1e9)] = _0x17b620["getScores"]()), (d[_0x26c0dd(0x1e9)] = _0x17b620[_0x26c0dd(0x175)]());
  const _0x178362 = [],
    _0xfbfbdc = [];
  let _0x346b7d;
  const _0x49863b = window[_0x26c0dd(0x137)](() => {
    const _0x34f04e = _0x26c0dd,
      _0x481e00 = Math[_0x34f04e(0x17f)]() * n["width"],
      _0x6013fa = Math[_0x34f04e(0x1a8)](Math[_0x34f04e(0x17f)]() * _0x420e92[_0x34f04e(0x145)]),
      _0x2210f5 = [];
    for (let _0x494270 = _0x178362[_0x34f04e(0x145)] - 0x1; _0x494270 >= 0x0; _0x494270--) {
      const _0x53c1a9 = _0x178362[_0x494270];
      _0x2210f5[_0x34f04e(0x1ee)](_0x53c1a9[_0x34f04e(0x182)]) || _0x2210f5[_0x34f04e(0x1be)](_0x53c1a9[_0x34f04e(0x182)]);
    }
    !_0x2210f5["includes"](_0x420e92[_0x6013fa]) &&
      _0x481e00 > 0x32 &&
      _0x481e00 < n[_0x34f04e(0x1b0)] - 0x46 &&
      _0x178362["push"](
        new t({ position: { x: _0x481e00, y: -0x32 }, velocity: { x: 0x0, y: 0x1 }, text: _0x420e92[_0x6013fa] })
      );
  }, 0x3e8);
  function _0x9af01e(_0x54586d) {
    const _0x5558a2 = _0x26c0dd;
    for (let _0x4825d9 = _0x178362[_0x5558a2(0x145)] - 0x1; _0x4825d9 >= 0x0; _0x4825d9--) {
      const _0x2174f4 = _0x178362[_0x4825d9];
      _0x2174f4["text"][_0x2174f4[_0x5558a2(0x19e)]][_0x5558a2(0x162)]() === _0x54586d[_0x5558a2(0x162)]() &&
        ((_0x5d93eb = _0x2174f4),
        _0xfbfbdc["push"](
          new o({
            position: { x: _0x8f1111[_0x5558a2(0x149)]["x"], y: _0x8f1111[_0x5558a2(0x149)]["y"] },
            velocity: {
              x: 0x2bc * _0xc017f8({ x: _0x8f1111[_0x5558a2(0x149)]["x"], y: _0x8f1111["position"]["y"] }, _0x5d93eb),
              y: 0x2bc * _0x583d76({ x: _0x8f1111[_0x5558a2(0x149)]["x"], y: _0x8f1111[_0x5558a2(0x149)]["y"] }, _0x5d93eb),
            },
            rotation: _0xc017f8({ x: _0x8f1111[_0x5558a2(0x149)]["x"], y: _0x8f1111[_0x5558a2(0x149)]["y"] }, _0x5d93eb),
          })
        ),
        _0x2174f4[_0x5558a2(0x152)](),
        _0x2174f4[_0x5558a2(0x172)]());
    }
    var _0x5d93eb;
  }
  function _0xc017f8(_0x28547e, _0x2bb843) {
    const _0x4db575 = _0x26c0dd,
      _0x387551 = _0x2bb843[_0x4db575(0x149)]["x"] - _0x28547e["x"],
      _0x27ea57 = _0x2bb843["position"]["y"] - _0x28547e["y"];
    return _0x387551 / Math["sqrt"](_0x387551 * _0x387551 + _0x27ea57 * _0x27ea57);
  }
  function _0x583d76(_0x1e28e0, _0x4ac217) {
    const _0x440d3d = _0x26c0dd,
      _0x3a7a4f = _0x4ac217["position"]["x"] - _0x1e28e0["x"],
      _0x12b80d = _0x4ac217["position"]["y"] - _0x1e28e0["y"];
    return _0x12b80d / Math[_0x440d3d(0x184)](_0x3a7a4f * _0x3a7a4f + _0x12b80d * _0x12b80d);
  }
  !(function _0x391344() {
    const _0xbae179 = _0x26c0dd;
    (_0x346b7d = window[_0xbae179(0x205)](_0x391344)),
      (l[_0xbae179(0x1b5)] = _0xbae179(0x1c6)),
      l[_0xbae179(0x154)](0x0, 0x0, n[_0xbae179(0x1b0)], n[_0xbae179(0x13d)]),
      _0x8f1111["draw"](),
      _0x17b620[_0xbae179(0x1a7)]();
    for (let _0x862320 = _0xfbfbdc[_0xbae179(0x145)] - 0x1; _0x862320 >= 0x0; _0x862320--) {
      const _0x18bdb0 = _0xfbfbdc[_0x862320];
      _0x18bdb0[_0xbae179(0x1a7)](),
        _0x8f1111[_0xbae179(0x13e)](),
        _0x8f1111[_0xbae179(0x14e)](),
        _0x18bdb0["position"]["y"] < 0x0 && _0xfbfbdc["splice"](_0x862320, 0x1);
    }
    for (let _0x248fee = _0x178362[_0xbae179(0x145)] - 0x1; _0x248fee >= 0x0; _0x248fee--) {
      const _0xec428c = _0x178362[_0x248fee];
      _0xec428c[_0xbae179(0x1a7)](),
        _0x49e037[_0xbae179(0x1a7)](),
        _0xec428c[_0xbae179(0x149)]["y"] > n[_0xbae179(0x13d)] - 0x1e &&
          (_0x17b620[_0xbae179(0x14a)](),
          _0x178362[_0xbae179(0x1c2)](_0x248fee, 0x1),
          _0x17b620[_0xbae179(0x138)](-0x1),
          _0x17b620["getLives"]() ? (d[_0xbae179(0x1e9)] = _0x17b620[_0xbae179(0x175)]()) : I(_0x346b7d, _0x49863b, _0x17b620)),
        _0xec428c[_0xbae179(0x19e)] === _0xec428c["text"][_0xbae179(0x145)] &&
          (_0x178362[_0xbae179(0x1c2)](_0x248fee, 0x1),
          _0x17b620[_0xbae179(0x161)](_0xec428c["text"]["length"]),
          (h[_0xbae179(0x1e9)] = _0x17b620[_0xbae179(0x1a0)]()));
    }
  })();
  const _0x284cb3 = [
    _0x26c0dd(0x19b),
    _0x26c0dd(0x1dc),
    _0x26c0dd(0x1aa),
    _0x26c0dd(0x157),
    _0x26c0dd(0x1c7),
    _0x26c0dd(0x1cd),
    _0x26c0dd(0x146),
    _0x26c0dd(0x156),
    _0x26c0dd(0x16a),
    _0x26c0dd(0x1ac),
    _0x26c0dd(0x1e0),
    _0x26c0dd(0x15a),
    _0x26c0dd(0x1b9),
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "KeyZ",
    _0x26c0dd(0x20c),
    _0x26c0dd(0x13b),
    _0x26c0dd(0x1df),
    _0x26c0dd(0x153),
    _0x26c0dd(0x1da),
    _0x26c0dd(0x15b),
  ];
  window[_0x26c0dd(0x199)]("keydown", (_0x1cc90a) => {
    const _0x3789b3 = _0x26c0dd;
    switch (
      (_0x284cb3[_0x3789b3(0x1ee)](_0x1cc90a[_0x3789b3(0x143)]) && _0x9af01e(_0x1cc90a[_0x3789b3(0x143)][0x3]),
      _0x1cc90a[_0x3789b3(0x143)])
    ) {
      case _0x3789b3(0x148):
        _0x9af01e("0");
        break;
      case _0x3789b3(0x170):
        _0x9af01e("5");
        break;
      case _0x3789b3(0x189):
        console[_0x3789b3(0x1ce)](_0x3789b3(0x160));
    }
  }),
    c["addEventListener"](_0x26c0dd(0x1ec), function _0x15dacb() {
      const _0x378b79 = _0x26c0dd;
      return (
        window[_0x378b79(0x16c)](_0x346b7d), clearInterval(_0x49863b), L(), c["removeEventListener"](_0x378b79(0x1ec), _0x15dacb)
      );
    });
}
function I(_0x432ee1, _0x4f34b6, _0x8049a7) {
  const _0x5cad1e = _0x34fbf1;
  window[_0x5cad1e(0x16c)](_0x432ee1),
    clearInterval(_0x4f34b6),
    (f["style"][_0x5cad1e(0x191)] = _0x5cad1e(0x208)),
    (x[_0x5cad1e(0x1e9)] = _0x8049a7[_0x5cad1e(0x1a0)]()),
    (v[_0x5cad1e(0x1e9)] = _0x8049a7["getHighScore"]()),
    (a[_0x5cad1e(0x1ed)]["display"] = _0x5cad1e(0x180)),
    (c[_0x5cad1e(0x1ed)]["display"] = _0x5cad1e(0x180));
}
function _0xd3e5() {
  const _0x3126a4 = [
    "add",
    "getDictionaryName",
    "desktop",
    "rotate",
    "update",
    "floor",
    "javascript",
    "KeyE",
    "hitText",
    "KeyP",
    "Ravager",
    "tag",
    "9HEDKlf",
    "width",
    "playBtn",
    "__lives",
    "6323796ZQIQxE",
    "Warlock",
    "fillStyle",
    "infoTable",
    "Collector",
    "Star",
    "KeyD",
    "Sword",
    "playAgainBtn",
    "querySelector",
    "Orb",
    "push",
    "__scores",
    "Dance",
    "fill",
    "splice",
    "shootShadowColor",
    "#294d61",
    "16863824clAXZM",
    "rgba(5,\x2022,\x2026,\x200.2)",
    "KeyT",
    "Ego",
    "lineWidth",
    "pointer",
    "Nebula",
    "django",
    "KeyY",
    "log",
    "#6da5c0",
    "cs50",
    "science",
    "5QLrgts",
    "measureText",
    "gray",
    "__chosenDictionary",
    "__isBubbleMissed",
    "Yondu",
    "form",
    "setChosenDictionary",
    "KeyN",
    "innerWidth",
    "KeyW",
    "section",
    "beginPath",
    "KeyV",
    "KeyA",
    "\x20<span\x20class=\x22new-record-badge\x22>New\x20record!</span>",
    "ellipse",
    "classList",
    "value",
    "sort",
    "line",
    "long",
    "Nova",
    "innerHTML",
    "Lorem",
    "font",
    "click",
    "style",
    "includes",
    "Retro",
    "gallery",
    "like",
    "infoScores",
    "gameOverHighest",
    "#EC9704",
    "background",
    "arc",
    "remove",
    "lives",
    "else",
    "8347080hSnaCH",
    "halloween",
    "__highScore",
    "industry",
    "destroyedStrokeStyle",
    "flask",
    "CSS",
    "<option\x20value=\x22",
    "getHighScore",
    "merge",
    "Stone",
    "requestAnimationFrame",
    "fiftyville",
    "Ipsum",
    "flex",
    "heap",
    "normalStrokeStyle",
    "dictionary",
    "KeyX",
    "Bogdan\x20Shologin",
    "3838516SlFCeE",
    "Soul",
    "shadowColor",
    "Tower",
    "bold\x2018px\x20Arial",
    "dictionarySelect",
    "and",
    "finance",
    "positionY",
    "_high_score",
    "2035044reGEKS",
    "fillText",
    "TCP",
    "Mix",
    "#b51a2b",
    "setInterval",
    "setLives",
    "aboutBtn",
    "save",
    "KeyC",
    "restore",
    "height",
    "draw",
    "translate",
    "stroke",
    "velocityY",
    "ever",
    "code",
    "1003323dibuMh",
    "length",
    "KeyU",
    "array",
    "Digit0",
    "position",
    "bubbleMissed",
    "git",
    "radius",
    "the",
    "shootEffect",
    "mainMenuTable",
    "Guardians",
    "__dictionaries",
    "increaseLetterIndex",
    "KeyB",
    "fillRect",
    "gameOverTable",
    "KeyI",
    "KeyR",
    "Ronan",
    "mario",
    "KeyS",
    "KeyM",
    "memory",
    "setItem",
    "getDictionary",
    "Love",
    "Hello\x20there!",
    "setScores",
    "toLowerCase",
    "python",
    "__dictionaryName",
    "shadowBlur",
    "shadowOffset",
    "leap",
    "normalShadowColor",
    "aboutBadge",
    "KeyO",
    "day",
    "cancelAnimationFrame",
    "Lord",
    "simply",
    "bubble",
    "Digit5",
    "hitShadowColor",
    "changeColor",
    "queue",
    "Milano",
    "getLives",
    "closeAboutBtn",
    "rgba(6,\x2088,\x2047,\x200.02)",
    "Dictionary\x20wasn\x27t\x20set:\x20",
    "Infinity",
    "debug",
    "shadowOffsetY",
    "animation-appear",
    "Drax",
    "canvasMenuLinkBtn",
    "random",
    "none",
    "normalText",
    "text",
    "Cosmo",
    "sqrt",
    "author",
    "strokeRect",
    "1276033EKUXrJ",
    "Planet",
    "Space",
    "Arrow",
    "book",
    "destroyedShadowColor",
    "red",
    "strokeStyle",
    "page",
    "velocity",
    "display",
    "block",
    "<svg\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22none\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewBox=\x220\x200\x2024\x2024\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-width=\x221.5\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke=\x22#EC9704\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22info-fire-icon\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linecap=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linejoin=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M15.362\x205.214A8.252\x208.252\x200\x200112\x2021\x208.25\x208.25\x200\x20016.038\x207.048\x208.287\x208.287\x200\x20009\x209.6a8.983\x208.983\x200\x20013.361-6.867\x208.21\x208.21\x200\x20003\x202.48z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linecap=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20stroke-linejoin=\x22round\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M12\x2018a3.75\x203.75\x200\x2000.495-7.467\x205.99\x205.99\x200\x2000-1.925\x203.546\x205.974\x205.974\x200\x2001-2.133-1A3.75\x203.75\x200\x200012\x2018z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
    "Gamora",
    "dracula",
    "</option>",
    "white",
    "rotation",
    "addEventListener",
    "closePath",
    "KeyQ",
    "#fbe4d8",
    "Quill",
    "letterIndex",
    "hitStrokeStyle",
    "getScores",
    "getElementById",
    "since",
  ];
  _0xd3e5 = function () {
    return _0x3126a4;
  };
  return _0xd3e5();
}
function B(_0x278cef, _0x1ab3b3, _0x4c211b) {
  const _0x1e9e15 = _0x34fbf1;
  _0x278cef[_0x1e9e15(0x1e3)][_0x1e9e15(0x1a3)]("animation-fade"),
    setTimeout(() => {
      const _0xafddbf = _0x1e9e15;
      _0x278cef[_0xafddbf(0x1e3)][_0xafddbf(0x1f7)]("animation-fade"),
        (_0x278cef[_0xafddbf(0x1ed)][_0xafddbf(0x191)] = _0xafddbf(0x180)),
        (_0x1ab3b3[_0xafddbf(0x1ed)][_0xafddbf(0x191)] = _0xafddbf(0x208)),
        _0x1ab3b3[_0xafddbf(0x1e3)][_0xafddbf(0x1a3)](_0xafddbf(0x17c)),
        setTimeout(() => {
          const _0x139437 = _0xafddbf;
          _0x1ab3b3[_0x139437(0x1e3)][_0x139437(0x1f7)](_0x139437(0x17c));
        }, _0x4c211b);
    }, _0x4c211b);
}
m[_0x34fbf1(0x199)]("change", (_0x183a80) => {
  const _0x208d14 = _0x34fbf1;
  b[_0x208d14(0x1d9)](_0x183a80["target"][_0x208d14(0x1e4)]) || console[_0x208d14(0x1ce)]("Set\x20wrong\x20dictionary");
}),
  L(),
  y[_0x34fbf1(0x199)](_0x34fbf1(0x1ec), C),
  _[_0x34fbf1(0x199)]("click", C),
  k[_0x34fbf1(0x199)](_0x34fbf1(0x1ec), L),
  u[_0x34fbf1(0x199)]("click", () => B(g, w, 0x12c)),
  S["addEventListener"](_0x34fbf1(0x1ec), () => B(w, g, 0x12c));
