// Type definitions for snapshot-diff 0.7
// Project: https://github.com/jest-community/snapshot-diff
// Definitions by: Cody Mathisen <https://github.com/mizx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jest" />

interface Options {
    /**
     * Expand the diff, so the whole information is preserved.
     *
     * @default false
     */
    expand?: boolean;
    /**
     * Preserve color information from Jest diff.
     *
     * @default false
     */
    colors?: boolean;
    /**
     * Number of context lines to be shown at the beginning and at the end of a snapshot.
     *
     * @default 5
     */
    contextLines?: number;
    /**
     * Prevent line number patch marks from appearing in diffs.
     * This can be helpful when diffs are breaking only because of the patch marks.
     * Changes `@@ -1,1 +1,2 @@` to `@@ --- --- @@`.
     *
     * @default false
     */
    stablePatchmarks?: boolean;
    /**
     * The annotation indicating from which serialization the `-` lines are.
     *
     * @default "First Value"
     */
    aAnnotation?: string;
    /**
     * The annotation indicating from which serialization the `+` lines are.
     *
     * @default "Second Value"
     */
    bAnnotation?: string;
}

declare namespace jest {
    interface Matchers<R> {
        toMatchDiffSnapshot(value: unknown, options?: Options, testName?: string): R;
    }
}
