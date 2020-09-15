import { NameFilter, RepoResult, ServerResults } from '@nav-frontend/shared-types';
import express = require('express');
const app: express.Application = express();
const packages = require('../crawler/output/outputPackages.json');
const raw = require('../crawler/output/outputRepos.json');
import { filterByNames, filterByOptions, filterByPack, getRes, sortBy } from './generateRes';
const PORT = 3001;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());

app.listen(PORT, function () {
    console.log('Server is listening on port ' + PORT);
});

app.get('/initial-load', function (req, res) {
    const result: ServerResults = { repos: getRes(raw), statistics: [], history: [] };
    res.json(result);
});

app.post('/filter', function (req, res) {
    let result;
    try {
        result = filterByNames(raw, req.body.nameFilter);
        result = filterByOptions(result, req.body.nameFilter);
        result = filterByPack(result, req.body.packFilter);

        result = result.map((repo) => RepoResult(repo));
        sortBy(result, req.body.nameFilter.sortby);
        res.json({ repos: result, statistics: [], history: [] });
    } catch (e) {
        res.json({ repos: [], statistics: [], history: [] });
    }
});
