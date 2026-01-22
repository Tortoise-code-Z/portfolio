import { validateProp } from "./utils";
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
  validateProp("template", template, "string");
  validateProp("templateID", templateID, "string");
  validateProp("typeDoc", typeDoc, "string");

  const doc = new DOMParser().parseFromString(template, typeDoc);
  const templateElement = doc.querySelector(`.${templateID}`);
  return templateElement.content.cloneNode(true);
}
