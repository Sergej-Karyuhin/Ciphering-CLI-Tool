const converter = (offset) => {
  return function (str) {
    const unicodeArray = [];
    const convertedUnicodeArray = [];

    for (let i = 0; i < str.length; i++) {
      const unicodeValue = str.charCodeAt(i);
      if (unicodeValue >= 97 && unicodeValue <= 122) {
        unicodeArray.push(((((unicodeValue - 97 + offset) % 26) + 26) % 26) + 97);
      } else if (unicodeValue >= 65 && unicodeValue <= 90) {
        unicodeArray.push(((((unicodeValue - 65 + offset) % 26) + 26) % 26) + 65);
      } else unicodeArray.push(unicodeValue);
    }

    for (let i = 0; i < unicodeArray.length; i++) {
      convertedUnicodeArray.push(String.fromCharCode(unicodeArray[i]));
    }

    return convertedUnicodeArray.join('');
  };
};

export default converter;
