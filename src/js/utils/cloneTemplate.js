export default function cloneTemplate(
  template,
  templateID,
  typeDoc = "text/html"
) {
  const doc = new DOMParser().parseFromString(template, typeDoc);
  const templateElement = doc.querySelector(`.${templateID}`);
  return templateElement.content.cloneNode(true);
}
