# get-version-key-from-json

This action returns the "version" key from a JSON file, or it fails

## Inputs

## `path-to-json`

**Required** The path to the JSON file in your repo to read the version key from

## Outputs

## `version`

The version key from the JSON object you provided
## Example usage
```yaml
on: [push]

jobs:
  test_get-version-key-from-json-action:
    runs-on: ubuntu-latest
    name: A job to test whether the get-version-key-from-json action is working
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: actions/checkout@v3
      - name: Get version from package.json
        uses: get-version-key-from-json # Uses an action in the root directory
        id: get-version-key-from-json-step
        with:
          path-to-json : './test-data/package.json'
      - name: print version output
        run: echo "The version key in your json was ${{ steps.get-version-key-from-json-step.outputs.version }}"
     
```

## Notes:

Unlike other environments it is expected that `node_modules` are checked in to `git` when building a GitHub action
