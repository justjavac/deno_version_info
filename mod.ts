export interface VersionInfo {
  latest: string;
  versions: string[];
}

export default async function versionInfo(
  mod: string,
): Promise<VersionInfo | null> {
  const response = await fetch(
    `https://cdn.deno.land/${mod}/meta/versions.json`,
  );

  if (response.status !== 200) {
    return null;
  }

  const result: VersionInfo = await response.json();
  return result;
}
