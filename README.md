# deno_version_info

[![tag](https://img.shields.io/github/release/justjavac/deno_version_info)](https://github.com/justjavac/deno_version_info/releases)
[![Build Status](https://github.com/justjavac/deno_version_info/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_version_info/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_version_info)](https://github.com/justjavac/deno_version_info/blob/master/LICENSE)

Get version info of Deno from <https://deno.land/x>.

## Usage

```js
import versionInfo from 'https://deno.land/x/version_info/mod.ts';
import type { VersionInfo } from 'https://deno.land/x/version_info/mod.ts';

await versionInfo('std');
```

output:

```ts
{
  latest: "0.66.0",
  versions: [
    "0.66.0", "0.65.0", "0.64.0",
    "0.63.0", "0.62.0", "0.61.0",
    "0.60.0", "0.59.0", "0.58.0",
    "0.57.0", "0.56.0", "0.55.0",
    "0.54.0", "0.53.0", "0.52.0",
    "0.51.0", "0.50.0", "0.42.0",
    "0.41.0", "0.40.0", "0.39.0",
    "0.38.0", "0.37.0", "0.36.0",
    "0.35.0", "0.34.0"
  ]
}
```

## Example

```bash
deno run --allow-net https://deno.land/x/version_info/example.ts
```

## License

[deno_version_info](https://github.com/justjavac/deno_version_info) is released
under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
