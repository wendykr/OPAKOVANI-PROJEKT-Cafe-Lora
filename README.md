# Café Lóra

Fiktivní webový projekt semestrálního kurzu [JavaScript 2 JARO 2023](https://www.czechitas.cz/kurzy/javascript-2), na kterém si procvičíme, co jsme se dosud v JavaScriptu naučili.


# 1. Seznámení s projektem

Design cílové stránky v HTML a CSS spolu s veškerými obrázky najdete v repozitáři [Cafe-Lora](https://github.com/Czechitas-podklady-WEB/Cafe-Lora). Poděkujte grafikům a kodérům, kteří pro vás tento návrh připravili a vy se už můžete zabývat pouze programováním.

Repozitář s designem si rovnou naklonujte. **Neforkujte** jej a nedělejte v něm žádné změny, slouží **pouze jako zdroj HTML a CSS**. V následujících krocích si pro váš projekt založíte vlastní repozitář na svém GitHubu.

- Seznamte se se zdrojovým kódem, který je pro vás v projektu připraven. Spusťte si web pomocí `npx serve`. Prohlédněte si HTML a CSS obou stránek.
- Na stránkách najdete příklad nápojů a objednávky. Tato data samozřejmě budeme později stahovat z API.
- Na vašem vlastním GitHubu si založte repozitář `cafelora`. Repozitář si naklonujte a uvnitř spusťte příkaz

```javascript
npm init kodim-app@latest . vanilla
```

čímž vytvořte základ *vanilla* JavaScriptového projektu. Commitněte změny s hezky formulovanou zprávou.
- Projekt si spusťte pomocí `npm run start` a jste připraveni začít programovat.


# 2. Komponenty

Jako první budeme chtít rozsekat hlavní stránku na následující komponenty:

- `Header` - hlavička stránky,
- `Banner` - uvítací obrázek,
- `Menu` - meníčko s nápoji,
- `Gallery` - obrázek kavárny a texty,
- `Contact` - kontakt a otvírací hodiny,
- `Footer` - patička.

- Upravte `body` uvnitř `index.html` tak, aby obsahoval pouze jeden `div` s id `app`. Celá DOM struktura naší aplikace se bude vytvářet v JavaScriptu pomocí komponent.
- Ve složce `src` vytvořte složku `components` a v ní postupně vytvořte všechny výše zmíněné komponenty pro hlavní stránku. Rozsekejte HTML i CSS tak, aby každá komponenta měla vlastní styly i obrázky. Globální styly pro celou aplikaci, hlavičku a patičku najděte v souboru `style.css`. Styly ostatních komponent hlavní stránky najdete v souboru `index.css`. Soubor index.css je strukturovaný tak, aby styly pro jednotlivé komponenty byly seskupené u sebe, nemusíte tak zoufale lovit styly po celém projektu.

Chceme dosáhnout toho, aby hlavní kód v `index.js` vaší aplikace vypadal takto:

```javascript
const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);
```

- Vyzkoušejte, že máte hotovou stránku, která vypadá stejně jako stránka ze zadání s funkční navigací. Proveďte commit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.


# 3. Zprovoznění navigace

Jako další úkol rozchodíme zatím nefunkční navigaci a zařídíme, aby se na úzkých displejích navigace zobrazovala po kliknutí na hamburger ikonku.

- Nejdříve do příslušných komponent přidejte attributy `id` tak, aby odkazy v navigaci po kliknutí přesunuly uživatele na správnou část stránky.
- Zobrazování a skrývání navigačního menu uděláme tak, že budeme prvku `.rollout-nav` přidávat nebo odebírat třídu `nav-closed`. V komponentě `Header` vyberte ikonku `.nav-btn` a připojte k ní posluchač události `click`. Tento posluchač bude přepínat třídu `nav-closed` na prvku `.rollout-nav`. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
- Navigaci budeme chtít schovat i po kliknutí na odkaz na nějakou sekci. Připojte tedy další posluchač události přímo na prvek `.rollout-nav`. V posluchači události zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala (tj. prvku `.rollout-nav` přidáte třídu `nav-closed`, obdobně, jako v předchozím kroku při přepínání).
- Jakmile je váš kód funkční, proveďte commit se zodpovědně napsanou zprávou a pushněte do vzdáleného repozitáře.


# 4. Nápoj jako komponenta

V komponentě `Menu` máme příklad tří nápojů zatím jako natvrdo vytvořené HTML. Budeme chtít mít každý nápoj v menu jako komponentu. Připravujeme se na to, abychom později mohli seznam nápojů zobrazovat stažením dat z API.

Vytvoříme komponentu `Drink`, která zatím nebude mít funkční objednávací tlačítko a nebude ještě správně zobrazovat ingredience. Obojí doplníme později.

- Ve složce pro komponentu `Menu` vytvořte složku `components` a v ní složku `Drink` s `index.js` a `style.css`. Do `style.css` přesuňte styly související s komponentou.
- V `index.js` vytvořte komponentu `Drink`, která očekává `props` v následujícím tvaru. Vlastnost `id` se v komponentě v tuto chvíli nebude používat, bude se nám hodit při volání API pro objednávání.

```javascript
{
  id: 'romano',
  name: 'Romano',
  ordered: false,
  image: 'https://cafelora.kodim.app/assets/cups/romano.png',
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ]
};
```

- Komponenta `Drink` zatím nebude využívat ani vlastnost `layers`. Ingredience zatím nechte tak, jak jsou zobrazené ve stránce se zadáním. Komponentu pro ingredience vytvoříme v následujícím cvičení. Zatím na stránce klidně zobrazte pouze jeden nápoj, ať se moc nenadřete.
- Adresa obrázku, který se má zobrazit, je uložena ve vlastnosti `image`. Tato cesta se použije pro atribut `src` obrázku.
- Tlačítko zatím pouze zobrazte, funkčnost mu přidáme v dalším kroku.
- V této fázi si commitněte kód s užitečně napsanou commit zprávou a pushněte do vzdáleného repozitáře.


# 5. Ingredience jako komponenty

Abychom mohli vytvářet seznam ingrediencí podle dat, každá ingredience musí být také komponenta.

- Ve složce `Menu/components` vytvořte komponentu `Layer`, která očekává `props` v následujícím tvaru.

```javascript
{
  color: '#feeeca',
  label: 'mléčná pěna',
}
```

Podívejte se do `Menu` na strukturu jednotlivých vrstev. Komponenta nechť vrací DOM element pro jednu vrstvu. Do komponenty přesuňte styly s ní související.
- Použijte vaši komponentu v komponentě `Drink` k zobrazení vrstev v nápoji. Vyzkoušejte, že váš projekt funguje. Commitněte kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.


# 6. Stažení nápojů z API

Konečně zobrazíme celou nabídku nápojů, které si stáhneme z API.

- Nejdříve si prohlédněte [dokumentaci k API](https://cafelora.kodim.app/apidoc) a seznamte se s jednotlivými endpointy a s nutností autentizace.
- Upravte komponentu `Menu` tak, aby stahovala nápoje z API. K tomu je potřeba přidat *props* s názvem `drinks`, které na začátku předáme hodnotu `'loading'` udávající, že je potřeba stáhnout data z API. Pokud *props* `drinks` není `'loading'`, znamená to, že nám přišla data. Zobrazte nápoje uvnitř prvku `drinks-list`.
- Tlačítko pro zobrazení detailu objednávky, které je na konci menu, vkládejte do elementu menu (`section` s třídou `menu`) pomocí `append()`. Nepoužívejte `innerHTML +=` – v následujícím cvičení by se vám nepodařilo zprovoznit tlačítko pro objednávání.
- Vyzkoušejte, že vaše stránka zobrazuje všechny nápoje. Commitněte se srozumitelnou zprávou a pushněte do vzdáleného repozitáře.


# 7. Objednání nápoje

Zprovozníme tlačítko pro objednávání nápoje.

- Nejdříve si všimněte, že data pro jeden nápoj obsahují vlastnost `ordered`, která udává, zda je nápoj zrovna objednaný či nikoliv. Toto je zároveň *props* v komponentě `Drink`. Upravte tuto komponentu tak, aby v závislosti na hodnotě této *props* zobrazila na tlačítku text *Objednat* nebo *Zrušit*.
- Na objednávací tlačítko také přidejte třídu `.order-btn--ordered` v případě, že nápoj je objednaný.
- V [dokumentaci k API](https://cafelora.kodim.app/apidoc/) si nastudujte, jak se dělá pomocí HTTP metody PATCH objednání nebo zrušení objednávky nápoje.
- V komponentě `Drink` pověste na tlačítko `.order-btn` posluchač události, který pošle na server příslušný požadavek. API endpoint vrací vždy aktualizovaná data pro daný nápoj. Jakmile dorazí data ze serveru, stačí komponentu `Drink` aktualizovat s novými daty pomocí `replaceWith`.
- Vyzkoušejte si na stránce, že objednávání nápojů funguje.
- Commitněte váš kód se zodpovědně napsanou commit zprávou a pushněte do vzdáleného repozitáře.


# 8. Routování

Zprovozníme klientské routování, abychom dokázali zobrazit stránku se shrnutím objednávky.

- Ve složce `src` vytvořte složku `pages`. V ní budeme skladovat komponenty stránek.
- Ve vytvořené složce založte komponentu `HomePage`. Tato komponenta nechť vytvoří celý obsah domovské stránky. Většinu kódu můžete vzít z hlavního `index.js`.
- Ve složce `HomePage` vytvořte složku `components`, do které přesuňte všechny komponenty, které jsou pouze na domovské stránce, tedy `Banner`, `Contact`, `Gallery` a `Menu`. Komponenty `Footer` a `Header` použijeme i na ostatních stránkách, zůstanou tedy na svém místě v `src/components`.
- Upravte hlavní soubor `index.js` aby používal routování. Kromě importů tedy bude obsahovat:

```javascript
const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
```

- Po těchto úpravách by vaše stránka měla fungovat zcela stejně jako před tím. Jsme však připraveni na přidání další stránky.
- Proveďte *commit* a *push* vašich změn.


# 9. Stránka pro detail objednávky

Vytvoříme kostru stránky pro detail objednávky. Komponenty pro jednotlivé položky objednávky vytvoříme v dalším cvičení.

- Ve složce `src/pages` založte novou komponentu `OrderPage`. Její obsah a styly zatím vezměte z připraveného zadání.
- Na stránce použijte komponenty `Header` a `Footer`. Komponentu `Header` bude potřeba upravit, protože na stránce s objednávkou se hlavička zobrazuje bez hlavního menu. Do komponenty `Header` tedy přidejte *props* s názvem `showMenu` s výchozí hodnotou `true`. Pokud bude `showMenu` mít hodnotu `false`, komponenta `Header` zobrazí hlavičku pouze s odkazem na hlavní stránku, jak je navrženo v zadání projektu v souboru `objednavka.html`.
- Upravte routing v hlavním `index.js` tak, aby se stránka `OrderPage `zobrazovala pod cestou `/objednavka`.
- Vyzkoušejte, že váš web funguje a že se lze přesouvat mezi oběma stránkami.
- Proveďte *commit* a *push* vašich změn.


# 10. Obsah objednávky

Vytvoříme komponenty pro zobrazování obsahu objednávky.

- Ve složce `src/pages/OrderPage/components` vytvořte komponentu `Order` pro zobrazení obsahu objednávky. Tato komponenta bude mít jedinou *props* `items`, která bude na začátku mít hodnotu `'loading'` jak už to známe. Data objednávky později stáhneme z API.
- Ve stejné složce vytvořte komponentu `OrderItem` s *props* `name` a `image` představující jednu položku objednávky.
- V komponentě `Order` získáte jednotlivé položky z objednávky tak, že si stáhnete z API všechny nápoje a pomocí metody `filter` zobrazíte pouze ty, které jsou objednané.
- Pokud je objednávka prázdná, zobrazte příslušnou zprávu.
- Vyzkoušejte, že stránka `OrderPage` správně zobrazuje obsah objednávky. Zkuste na hlavní stránce změnit objednané nápoje a zkontrolujte, že se na stránce s detailem objednávky správně aktualizuje obsah.
- Proveďte *commit* a *push* vašich změn.
Máte hotovo! Web *Café Lóra* ožil pod vašima rukama.


# 11. Bonus – Publikování na GitHub Pages

Váš projekt můžete zpřístupnit na GitHub Pages. Protože váš projekt už používá WebPack, nebude to tak jednoduché, jako dříve – ale jde to. Postupujte takto:

- V souboru `index.js` upravte podmínky na jednotlivé cesty, aby před cestou byla proměnná `BASE_PATH`:

```javascript
if (pathname === BASE_PATH + '/') {
  // … původní kód podmínky …
} else if (pathname === BASE_PATH + '/objednavka') {
  // … původní kód podmínky …
}
```

- V repozitáři na GitHubu přejděte nahoře do **Settings** → vlevo v sekci Code and automation vyberte **Pages** a na stránce pod *Build and deployment v Source* změňte *Deploy from branch* na **GitHub Actions (beta)**.
- Otevřete soubor .gitignore v kořenové složce vašeho projektu. V souboru zakomentujte pomocí znaku `#` řádek s `package-lock.json`:

```javascript
# Ignore the package-lock.json to prevent conflicts when collaborating
# package-lock.json
```

- V souboru `webpack.config.js` pod první dva řádky (volání funkce `require`) přidejte tento kód:

```javascript
const webpack = require("webpack");

const publicPath = process && process.env && process.env.GITHUB_REPOSITORY ? "/"+process.env.GITHUB_REPOSITORY.split(/)[1] : ""
```

V `module.exports` v objektu `output` změňte hodnotu `'/'` na (proměnnou) `publicPath` a za ni připojte string `"/"`.

Začátek souboru `webapck.config.js` pak bude vypadat takto:

```javascript
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const publicPath = process && process.env && process.env.GITHUB_REPOSITORY ? "/"+process.env.GITHUB_REPOSITORY.split("/")[1] : ""

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-source-map",
  output: {
    filename: "bundle-[contenthash:6].js",
    publicPath: publicPath + "/",
    clean: true,
  },
  // …
}
```

- Dále v souboru `webpack.config.js` v `module.exports` najděte pole `plugins`. Obsahuje `HtmlWebpackPlugin` a `CopyPlugin`, přidejte tam ještě `webpack.DefinePlugin`:

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: "src/index.html",
  }),
  new CopyPlugin({
    patterns: [{ from: "public", to: "", noErrorOnMissing: true }],
  }),
  new webpack.DefinePlugin({
    BASE_PATH: "'" + publicPath + "'",
  }),
],
```

- Vytvořte v kořenové složce projektu složku `.github`, v ní složku `workflows` a v ní soubor `pages.yml`. Celá cesta tedy bude `.github/worfkflows/pages.yml`.
- Do souboru `pages.yml` zkopírujte obsah ze vzorového souboru [pages.yml](https://github.com/FilipJirsak/cafelora-reseni/blob/main/.github/workflows/pages.yml).
- Všechny soubory (`index.js`, `.gitignore`, `package-lock.json`, `webpack.config.js`, `.github/workflows/pages.yml`) commitněte a pushněte na GitHub.
- Na konfigurační stránce GitHub Pages (viz první krok) se za chvilku objeví odkaz, kde běží publikovaný web. Otevřete web v prohlížeči a přidejte do LocalStorage svůj token z `kodim.cz` (pod klíč `token`). Po obnovení stránky by vám (se správným tokenem v prohlížeči) měla stránka plně fungovat včetně volání API.
- Pokud chcete zprovoznit i stránku s detailem objednávky, upravte v komponentě `Objednavka` (v `Menu`) odkaz na detail objednávky na `objednavka` (odstraníte lomítko na začátku). Dále je potřeba v souboru `package.json` upravit skript pro `build`. Za původní `webpack --mode=production` přidejte `&& cp dist/index.html dist/404.html`. Celý objekt `scripts` tedy bude vypadat takto:

```javascript
"scripts": {
  "build": "webpack --mode=production && cp dist/index.html dist/404.html",
  "start": "webpack serve --open"
},
```
