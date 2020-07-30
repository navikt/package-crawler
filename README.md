<h1 align="center">
    <img src="https://www.nav.no/_/asset/no.nav.navno:1575554845/img/navno/logo.svg" />
    <br/>package-crawler
</h1>

<div align="center">
    <p>
        Crawler for generering av data og statistikk for designsystemet. Vil i første omgang finne alle dependencies brukt i NAV sine repos og skrive dataen til en outputfil for videre prosessering.
    </p>
    <p>
      <a href="https://github.com/navikt/package-crawler/projects/1">
          <img src="https://progress-bar.dev/80?title=Completed" />
      </a>
    </p>
</div>

## Funksjon

Går gjennom alle repos i en github org og henter ut alle dependencies de bruker. Løser dette ved å laste ned alle repoene og gjennomgår dem lokalt. En mer praktisk løsning ville vært å bare gjøre calls til github-api, men med maks 5000 github-api calls i timen er dette upraktisk.

For Designsystemet sitt bruk går den gjennom alle repoene i `navikt` organisasjonen og henter ut dependencies som blir brukt.

## Bakgrunn

Vi i designsystemet ønsker mer informasjon om bruken av våre komponenter innenfor NAV, samt hvordan vi kan forbedre bruken og brukeropplevelsen rundt våre komponenter. For å gjøre dette trengs det statistikk og data.

## Bruk

1. `Installer Node.js, npm og typescript lokalt om ikke allerede gjort.`
2. `Konfiguer config.ts for endring av org, blacklists etc`
3. `Lag en .env fil i root og sett variablene for TOKEN, AGENT og ORG. (https://github.com/motdotla/dotenv)`
4. `npm install`
5. `tsc`
6. `npm start`

### .env eksempel
```
TOKEN=GITHUB_OAUTH_TOKEN
AGENT=NAV-Designsystemet-crawler
ORG=navikt
```

## Kontakt

Henvendelser tas gjerne imot under issues her på Github.

## Lisens

Gå til [LICENSE](https://github.com/navikt/package-crawler/blob/master/LICENSE)
