var referenceNumber = prompt('Introdu un numar:');

// for (var i = 0 ... ) {} -> absolutely useless
for (let i = 0; i <= 100; i++) {
  console.log(i);

  if (i % referenceNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${referenceNumber}.`);
}
