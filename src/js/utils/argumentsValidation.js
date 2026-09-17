/**
 * Validates a property's type and value against allowed constraints.
 *
 * @function validateProp
 * @param {string} name - The name of the property (for error reporting).
 * @param {*} value - The actual value to validate.
 * @param {string|string[]} type - The expected type(s) (e.g., 'string', 'HTMLElement', 'array').
 * @param {*[]} [allowedValues=null] - An optional list of specific allowed values.
 * @throws {TypeError} If the type is incorrect.
 * @throws {RangeError} If the value is not in the allowedValues list.
 * @returns {boolean} Returns true if validation passes.
 */
export function validateProp(name, value, type, allowedValues = null) {
  const types = Array.isArray(type) ? type : [type];

  // 1. Manejo de nulos y indefinidos (Short-circuit)
  if (value === null && types.includes("null")) return true;
  if (value === undefined && types.includes("undefined")) return true;

  // 2. Validación de tipos técnica
  const isValid = types.some((t) => {
    // Caso especial: Arrays
    if (t === "array") return Array.isArray(value);

    // Caso especial: DOM Nodes (Seguro para Node.js y Navegador)
    if (t === "HTMLElement" || t === "Node") {
      return typeof value === "object" && value !== null && "nodeType" in value;
    }

    // Caso especial: Funciones y Clases
    if (t === "function") return typeof value === "function";

    // Verificación por Constructor (Date, RegExp, AsyncFunction, etc.)
    const constructorName = value?.constructor?.name?.toLowerCase();
    if (constructorName === t.toLowerCase()) return true;

    // Verificación por typeof estándar (string, number, boolean, etc.)
    return typeof value === t;
  });

  if (!isValid) {
    const actualType =
      value === null ? "null" : value?.constructor?.name || typeof value;
    throw new TypeError(
      `"${name}" → Debe ser de tipo ${types.join(" o ")}. Recibido: ${actualType}`,
    );
  }

  // 3. Validación de valores permitidos
  if (allowedValues && !allowedValues.includes(value)) {
    throw new RangeError(
      `"${name}" → Solo se permiten los valores: ${allowedValues.join(", ")}. Recibido: ${value}`,
    );
  }

  return true;
}

/**
 * @typedef {Object} ValidationSchema
 * @property {*} value - The actual value to validate.
 * @property {string|string[]} type - The expected type(s) (e.g., 'string', 'HTMLElement', 'array', 'null').
 * @property {*[]} [allowedValues] - An optional list of specific allowed values.
 */

/**
 * Validates multiple properties at once against a defined schema.
 * * This utility iterates over an object where each key represents a property name
 * and its value is a validation configuration. It leverages `validateProp` internally
 * to enforce type and range constraints.
 *
 * @function validateProps
 * @param {Object.<string, ValidationSchema>} schema - An object mapping property names to their validation rules.
 * @returns {boolean} Returns true if all properties pass validation.
 * @throws {TypeError} If any property has an incorrect type.
 * @throws {RangeError} If any property value is not within its allowedValues list.
 * * @example
 * validateProps({
 * text: { value: text, type: 'string' },
 * level: { value: level, type: 'number', allowedValues: [1, 2, 3] },
 * top: { value: top, type: ['number', 'null'] }
 * });
 */
export function validateProps(schema) {
  Object.entries(schema).forEach(([name, config]) => {
    validateProp(name, config.value, config.type, config.allowedValues);
  });
  return true;
}
