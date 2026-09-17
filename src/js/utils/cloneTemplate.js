import { validateProps } from "./argumentsValidation.js";

/**
 * Parses a template string and clones the content of a specific template element.
 * * @function cloneTemplate
 * @param {string} template - The raw HTML string containing the template structure.
 * @param {string} templateID - The class name used to identify the specific template element.
 * @param {DOMParserSupportedType} [typeDoc="text/html"] - The MIME type used for parsing the string.
 * @returns {DocumentFragment} A deep clone of the content within the template element.
 */

export default function cloneTemplate(
  template,
  templateID,
  typeDoc = "text/html",
) {
  validateProps({
    template: { value: template, type: "string" },
    templateID: { value: templateID, type: "string" },
    typeDoc: { value: typeDoc, type: "string" },
  });

  const doc = new DOMParser().parseFromString(template, typeDoc);
  const templateElement = doc.querySelector(`.${templateID}`);
  return templateElement.content.cloneNode(true);
}
