# Code Review
testing  website sauce demo menggunakan cypress dan typescript. dalam testing ini ada 2 test cases yaitu:
1. login yang terdiri postive dan negative scenario. dalam folder pages terdapat login_pages.cy.js yang berfungsi untuk menampung element locator, kemudian di kirimkan ke file login.cy.js
2. cart product yang terdiri positive dan negative scenario.dalam folder pages terdapat cartProduct.page.cy.js yang berfungsi untuk menampung element locator, kemudian di kirimkan ke file cartProduct.cy.js.
3. dalam folder support terdapat file commands.ts yang berfungsi untuk membuat step login agar dapat di panggil secara global seperti saat di file cartProduct.cy.js memenggil login
4. dalam folder fixtures teerdapat file login.json yang berfungsi untuk penampung data, kemudian dapat di panggil di manapun. penerapannya seperti di file login.cy.js
5. dalam pembuatan automation testing ini, terdapat vidio dan test cases sebagai berikut <br />
   test cases & vidio: https://drive.google.com/drive/folders/1g93H8tzRQDCrb4jNUdsI--Ef0RcJ6EIN?usp=sharing

## How to run

```bash
npm install
```

run cypress
```bash
npx cypress run
```

open cypress dashboard
```bash
npx cypress open
```

### Thanks
