/**
 * Merges properties from a source object into a target object.
 *
 * This function iterates over each property of the source object and
 * assigns it to the target object if the property value is neither null nor undefined.
 * @param {T} target - The target object to which properties will be assigned.
 * @param {Partial<T> | undefined} source - The source object from which to assign properties.
 *                                         It's a partial representation of T, meaning its properties
 *                                         are optional and can be a subset of T's properties.
 *
 * @template T - A generic type extending object. This ensures that both target and source are objects.
 */
export function assignInit<T extends object>(target: T, source: Partial<T> | undefined): void {
  // Exit early if the source object is undefined.
  if (!source) return;

  // Cast the keys of the source object to keyof T, ensuring type safety.
  // This step is necessary because Object.keys() returns a string array,
  // but we need to treat the keys as specific keys of the generic type T.
  (Object.keys(source) as Array<keyof T>).forEach((key) => {
    // Retrieve the value corresponding to the current key in the source object.
    const value = source[key];

    // Check if the value is neither null nor undefined.
    // This ensures that only meaningful (non-null/undefined) values are assigned to the target.
    if (value !== null && value !== undefined) {
      // Assign the value to the target object.
      // The type assertion 'as T[keyof T]' confirms to TypeScript that the type of value
      // matches the type expected by the target object for this key.
      target[key] = value as T[keyof T];
    }
  });
}
