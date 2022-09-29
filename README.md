# get-version-from-package-json

This action returns the "version" key from a JSON file, or it fails

## Inputs

## `path-to-package-json`

**Required** The path to the JSON file in your repo to read the version key from

## Outputs

## `version`

The version key from the JSON object you provided
## Example usage
```yaml
on:
  pull_request:
    branches:
      - main
jobs:
  test_is-valid-json-action:
    runs-on: ubuntu-latest
    name: A job to test whether the is-valid-json is working properly
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: get-version-from-package-json
        uses: polyseam/get-version-from-package-json@v.1.0.0
        id: get-version-from-package-json
        with:
          path-to-file: './test-data/package.json'
      - name: print-validity
        run: echo "The version key in your json is ${{steps.get-version-from-package-json.outputs.version}}"
```

## Notes:

Unlike other environments it is expected that `node_modules` are checked in to `git` when building a GitHub action