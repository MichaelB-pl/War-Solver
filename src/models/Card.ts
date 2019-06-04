export class Card {
    value: CardValue;
    color: CardColor;

    constructor(value: CardValue, color: CardColor) {
        this.value = value;
        this.color = color;
    }
}

export enum CardValue {
    ACE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
}

export enum CardColor {
    HEART,
    SPADE,
    DIAMOND,
    CLUB,
}