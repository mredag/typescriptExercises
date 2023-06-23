/**
 * START: Follow the instructions below.
 */

interface Country {
    name: string;
    code: string;
    population?: number; // population is now optional
}

const countryA: Country = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

const countryB: Country = {
    name: "Italy",
    code: "IT"
};

const countryC: Country = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};

// Change the `Currency` type alias so the `name` property cannot be changed.
// This will cause a type error. Remove the code that now has a type error.

type Currency = {
    readonly name: string; // name is now read-only
    code: string;
    symbol: string;
};

const currencyData: Currency = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

// Removed: currencyData.name = "Gold"; // This line is now incorrect and has been removed.

currencyData.code = "EMRE";

// ----

export {};