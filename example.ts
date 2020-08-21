import versionInfo from "./mod.ts";
import type { VersionInfo } from "./mod.ts";

const result: VersionInfo | null = await versionInfo("std");

console.log(result);
