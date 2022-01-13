function isEvenOrOdd(num) {
    if (num % 2 == 0) {
      return "false";
    } else {
      return "true";
    }
  }
  console.log(isEvenOrOdd(28));

  function getCurrencySymbolFromCode(currency) {
    if (currency === "USD") {
      console.log("$");
    } else if (currency === "EUR") {
      console.log("€");
    } else if (currency === "GEL") {
      console.log("ლ");
    } else if ((currency !== "USD", currency !== "EUR", currency !== "GEL")) {
      console.log(currency);
    }
        }
          getCurrencySymbolFromCode("EUR");
  function LowCase(text) {
    let UpperCase = text.toLowerCase();
    console.log(UpperCase);
  }
  LowCase("MY NAME IS NICK");
  
  const array = [25, 35, 31, 19, 34, 53, 71, 18, 84, 3, 7, 5, 13, 66];
  const evens = array.filter(function (number) {
    return number % 2 === 0;
  });
  
  console.log(evens);
  
  const persons = [
    { name: "saba", age: 24 },
    { name: "nini", age: 24 },
    { name: "elene", age: 24 },
    { name: "mariami", age: 24 },
  ];
  const findPerson = persons.find((me) => {
    return me.name === "salome";
  });
  console.log(findPerson);