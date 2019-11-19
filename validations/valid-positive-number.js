const validPositiveNumber = number => {
    return typeof number === "number" && number > 0;
}

module.exports = validPositiveNumber;